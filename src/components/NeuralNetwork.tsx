import { useState, useEffect, useRef } from "react";

interface NeuralNode {
  id: number;
  x: number;
  y: number;
  connections: number[];
  activity: number;
  layer: number;
  neuronType: 'input' | 'hidden' | 'output' | 'memory';
  activationThreshold: number;
  synapticStrength: { [key: number]: number };
}

interface NeuralNetworkProps {
  className?: string;
  nodeCount?: number;
  connectionProbability?: number;
  layers?: number;
}

export const NeuralNetwork = ({ 
  className = "", 
  nodeCount = 40,
  connectionProbability = 0.3,
  layers = 4
}: NeuralNetworkProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [nodes, setNodes] = useState<NeuralNode[]>([]);
  const [dimensions, setDimensions] = useState({ width: 400, height: 300 });
  const [activeConnections, setActiveConnections] = useState<Set<string>>(new Set());
  const [networkStats, setNetworkStats] = useState({
    totalConnections: 0,
    activeNeurons: 0,
    synapticActivity: 0
  });
  const [isStatsExpanded, setIsStatsExpanded] = useState(false);

  // Initialize neural network
  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width || 400, height: rect.height || 300 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const newNodes: NeuralNode[] = [];
    const neuronTypes: ('input' | 'hidden' | 'output' | 'memory')[] = ['input', 'hidden', 'output', 'memory'];
    
    // Create layered neural network architecture
    for (let i = 0; i < nodeCount; i++) {
      // Determine layer and neuron type based on position
      const layerIndex = Math.floor((i / nodeCount) * layers);
      const layerProgress = layerIndex / (layers - 1);
      
      let neuronType: 'input' | 'hidden' | 'output' | 'memory';
      if (layerIndex === 0) neuronType = 'input';
      else if (layerIndex === layers - 1) neuronType = 'output';
      else if (Math.random() < 0.1) neuronType = 'memory'; // 10% memory neurons
      else neuronType = 'hidden';

      // Position nodes in layered structure with biological clustering
      const baseX = (layerProgress * 0.8 + 0.1) * dimensions.width;
      const clusterOffset = (Math.random() - 0.5) * 0.15 * dimensions.width;
      const x = baseX + clusterOffset;
      
      // Create cortical column-like vertical distribution
      const columnHeight = dimensions.height * 0.8;
      const y = (dimensions.height * 0.1) + (Math.random() * columnHeight);
      
      newNodes.push({
        id: i,
        x: Math.max(30, Math.min(dimensions.width - 30, x)),
        y: Math.max(30, Math.min(dimensions.height - 30, y)),
        layer: layerIndex,
        neuronType,
        connections: [],
        activity: Math.random() * 0.1, // Start with low baseline activity
        activationThreshold: 0.3 + Math.random() * 0.4, // Biological variation
        synapticStrength: {}
      });
    }

    // Create dense, biologically-inspired connections
    newNodes.forEach((node, i) => {
      newNodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          
          // Layer-based connection probability (feed-forward + recurrent + lateral)
          let connectionProb = connectionProbability;
          
          // Forward connections (higher probability)
          if (otherNode.layer === node.layer + 1) {
            connectionProb *= 2.5;
          }
          // Recurrent connections (moderate probability)
          else if (otherNode.layer === node.layer - 1) {
            connectionProb *= 1.2;
          }
          // Lateral connections (same layer)
          else if (otherNode.layer === node.layer) {
            connectionProb *= 0.8;
          }
          // Long-range connections (low probability)
          else if (Math.abs(otherNode.layer - node.layer) > 1) {
            connectionProb *= 0.3;
          }
          
          // Distance-based probability (local connectivity bias)
          const distanceFactor = Math.max(0.1, 1 - distance / (dimensions.width * 0.4));
          let finalProb = connectionProb * distanceFactor;
          
          // Neuron type-specific connection rules
          if (node.neuronType === 'memory' || otherNode.neuronType === 'memory') {
            finalProb *= 1.5; // Memory neurons are highly connected
          }
          
          if (Math.random() < finalProb && !node.connections.includes(j)) {
            node.connections.push(j);
            // Initialize synaptic strength with plasticity
            node.synapticStrength[j] = 0.1 + Math.random() * 0.8;
          }
        }
      });
    });

    // Calculate network statistics
    const totalConnections = newNodes.reduce((sum, node) => sum + node.connections.length, 0);
    setNetworkStats({
      totalConnections,
      activeNeurons: 0,
      synapticActivity: 0
    });

    setNodes(newNodes);
  }, [dimensions, nodeCount, connectionProbability, layers]);

  // Enhanced neural activity simulation with neuroscience principles
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prevNodes => {
        const updatedNodes = [...prevNodes];
        let activeCount = 0;
        let totalActivity = 0;
        
        // Simulate action potential propagation and synaptic transmission
        updatedNodes.forEach((node, i) => {
          let incomingSignal = 0;
          
          // Calculate incoming synaptic input
          prevNodes.forEach((sourceNode, sourceId) => {
            if (sourceNode.connections.includes(i)) {
              const synapticStrength = sourceNode.synapticStrength[i] || 0.5;
              const signal = sourceNode.activity * synapticStrength;
              incomingSignal += signal;
              
              // Synaptic plasticity - strengthen frequently used connections
              if (sourceNode.activity > 0.7) {
                updatedNodes[sourceId].synapticStrength[i] = Math.min(1.0, 
                  synapticStrength + 0.01
                );
              }
            }
          });
          
          // Apply activation function with biological realism
          const previousActivity = node.activity;
          let newActivity = previousActivity * 0.8; // Natural decay
          
          // Threshold activation (like action potential)
          if (incomingSignal > node.activationThreshold) {
            newActivity = Math.min(1.0, incomingSignal * 0.7);
            
            // Different neuron types have different behaviors
            switch (node.neuronType) {
              case 'input':
                newActivity *= 1.2; // Input neurons are more responsive
                break;
              case 'memory':
                newActivity = Math.max(newActivity, previousActivity * 0.95); // Memory retention
                break;
              case 'output':
                newActivity *= 0.9; // Output neurons integrate signals
                break;
              default: // hidden
                newActivity += Math.random() * 0.1 - 0.05; // Noise
            }
          }
          
          // Refractory period simulation
          if (previousActivity > 0.9) {
            newActivity *= 0.3; // Post-spike hyperpolarization
          }
          
          updatedNodes[i].activity = Math.max(0, Math.min(1, newActivity));
          
          if (updatedNodes[i].activity > 0.3) activeCount++;
          totalActivity += updatedNodes[i].activity;
        });
        
        // Spontaneous neural activity (like cortical up-states)
        if (Math.random() < 0.1) {
          const randomNeuron = Math.floor(Math.random() * updatedNodes.length);
          updatedNodes[randomNeuron].activity = Math.min(1.0, 
            updatedNodes[randomNeuron].activity + 0.6
          );
        }
        
        // Update network statistics
        setNetworkStats(prev => ({
          ...prev,
          activeNeurons: activeCount,
          synapticActivity: Math.round(totalActivity * 10) / 10
        }));
        
        return updatedNodes;
      });
      
      // Update active connections based on current activity
      const newActiveConnections = new Set<string>();
      nodes.forEach((node, i) => {
        if (node.activity > 0.5) {
          node.connections.forEach(connectedId => {
            const synapticStrength = node.synapticStrength[connectedId] || 0.5;
            if (synapticStrength > 0.3) {
              newActiveConnections.add(`${i}-${connectedId}`);
            }
          });
        }
      });
      setActiveConnections(newActiveConnections);
      
    }, 150); // Fast biological timescale (~7Hz like theta rhythm)

    return () => clearInterval(interval);
  }, [nodes.length]);

  const handleNodeHover = (nodeId: number) => {
    const node = nodes[nodeId];
    if (node) {
      const connectionSet = new Set<string>();
      node.connections.forEach(connectedId => {
        connectionSet.add(`${nodeId}-${connectedId}`);
      });
      setActiveConnections(connectionSet);
    }
  };

  const handleMouseLeave = () => {
    setActiveConnections(new Set());
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        onMouseLeave={handleMouseLeave}
      >
        {/* Render connections with synaptic strength visualization */}
        {nodes.map((node, i) =>
          node.connections.map(connectedId => {
            const connectedNode = nodes[connectedId];
            if (!connectedNode) return null;
            
            const connectionKey = `${i}-${connectedId}`;
            const isActive = activeConnections.has(connectionKey);
            const synapticStrength = node.synapticStrength[connectedId] || 0.5;
            
            return (
              <g key={connectionKey}>
                {/* Main synaptic connection */}
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={connectedNode.x}
                  y2={connectedNode.y}
                  className={`neural-connection ${isActive ? 'active synaptic-wave' : ''}`}
                  strokeOpacity={isActive ? 0.9 : Math.max(0.1, synapticStrength * 0.4)}
                  strokeWidth={1 + synapticStrength * 2}
                  stroke={isActive ? `hsl(var(--accent))` : `hsl(var(--secondary) / ${synapticStrength})`}
                />
                {/* Neurotransmitter vesicles animation */}
                {isActive && synapticStrength > 0.6 && (
                  <g>
                    <circle r="1.5" className="neural-spark" fill="hsl(var(--primary))">
                      <animateMotion dur="0.8s" repeatCount="1">
                        <mpath xlinkHref={`#path-${connectionKey}`} />
                      </animateMotion>
                    </circle>
                    <circle r="1" className="neural-spark" fill="hsl(var(--accent))">
                      <animateMotion dur="1.2s" repeatCount="1" begin="0.2s">
                        <mpath xlinkHref={`#path-${connectionKey}`} />
                      </animateMotion>
                    </circle>
                  </g>
                )}
              </g>
            );
          })
        )}
        
        {/* Render neuron types with distinct visual characteristics */}
        {nodes.map((node, i) => {
          const getNeuronColor = (type: string, activity: number) => {
            switch (type) {
              case 'input': return `hsl(var(--primary) / ${0.4 + activity * 0.6})`;
              case 'hidden': return `hsl(var(--secondary) / ${0.3 + activity * 0.7})`;
              case 'output': return `hsl(var(--accent) / ${0.4 + activity * 0.6})`;
              case 'memory': return `hsl(320 80% 60% / ${0.5 + activity * 0.5})`;
              default: return `hsl(var(--muted) / ${0.3 + activity * 0.7})`;
            }
          };
          
          const getNeuronSize = (type: string, activity: number) => {
            const baseSize = type === 'memory' ? 6 : type === 'output' ? 5 : 4;
            return baseSize + activity * 3;
          };
          
          return (
            <g key={node.id}>
              {/* Dendritic tree visualization for highly active neurons */}
              {node.activity > 0.6 && (
                <g opacity={node.activity * 0.4}>
                  {Array.from({ length: 4 }).map((_, dendrite) => (
                    <line
                      key={dendrite}
                      x1={node.x}
                      y1={node.y}
                      x2={node.x + Math.cos(dendrite * Math.PI / 2) * 15}
                      y2={node.y + Math.sin(dendrite * Math.PI / 2) * 15}
                      stroke={getNeuronColor(node.neuronType, node.activity * 0.5)}
                      strokeWidth="0.5"
                      className="neural-breathe"
                    />
                  ))}
                </g>
              )}
              
              {/* Membrane potential visualization */}
              {node.activity > 0.4 && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={getNeuronSize(node.neuronType, node.activity) + 4}
                  fill="none"
                  stroke={`hsl(var(--primary-glow) / ${node.activity * 0.4})`}
                  strokeWidth="1"
                  className="pulse-neural"
                />
              )}
              
              {/* Cell body (soma) */}
              <circle
                cx={node.x}
                cy={node.y}
                r={getNeuronSize(node.neuronType, node.activity)}
                className="neural-node cursor-pointer hover-neural-glow neural-transition"
                fill={getNeuronColor(node.neuronType, node.activity)}
                stroke={`hsl(var(--foreground) / ${0.2 + node.activity * 0.3})`}
                strokeWidth={node.neuronType === 'memory' ? 2 : 1}
                onMouseEnter={() => handleNodeHover(i)}
              />
              
              {/* Action potential spike */}
              {node.activity > 0.8 && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={2}
                  fill="white"
                  className="neural-spark"
                />
              )}
              
              {/* Neuron type indicator */}
              {node.neuronType !== 'hidden' && (
                <text
                  x={node.x}
                  y={node.y - getNeuronSize(node.neuronType, node.activity) - 8}
                  textAnchor="middle"
                  fontSize="8"
                  fill="hsl(var(--muted-foreground))"
                  className="font-mono"
                >
                  {node.neuronType.charAt(0).toUpperCase()}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      
      {/* Neural Activity Toggle */}
      <div className="absolute bottom-8 right-8 z-[100]">
        {!isStatsExpanded ? (
          /* Collapsed Button */
          <button
            onClick={() => setIsStatsExpanded(true)}
            className="p-3 bg-card/90 backdrop-blur-sm rounded-lg border border-border shadow-neural hover:shadow-lg neural-transition hover-neural-glow pointer-events-auto"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-accent rounded-full neural-spark" />
                <div className="absolute inset-0 w-2 h-2 bg-accent/50 rounded-full neural-glow" />
              </div>
              <span className="text-xs font-medium text-foreground">
                View Neural Activity
              </span>
            </div>
          </button>
        ) : (
          /* Expanded Statistics Panel */
          <div className="space-y-2 pointer-events-auto">
            {/* Main Activity Indicator */}
            <div className="p-3 bg-card/90 backdrop-blur-sm rounded-lg border border-border shadow-neural">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-accent rounded-full neural-spark" />
                    <div className="absolute inset-0 w-3 h-3 bg-accent/50 rounded-full neural-glow" />
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    Neural Network Status
                  </div>
                </div>
                <button
                  onClick={() => setIsStatsExpanded(false)}
                  className="text-muted-foreground hover:text-foreground neural-transition"
                >
                  ×
                </button>
              </div>
              
              {/* Detailed Statistics */}
              <div className="space-y-1 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Neurons:</span>
                  <span className="text-accent font-semibold">{networkStats.activeNeurons}/{nodeCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Synapses:</span>
                  <span className="text-secondary font-semibold">{networkStats.totalConnections}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Network Activity:</span>
                  <span className="text-primary font-semibold">{networkStats.synapticActivity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Density:</span>
                  <span className="text-foreground font-semibold">
                    {Math.round((networkStats.totalConnections / (nodeCount * (nodeCount - 1))) * 1000) / 10}%
                  </span>
                </div>
              </div>
            </div>
            
            {/* Neuron Type Legend */}
            <div className="p-2 bg-card/90 backdrop-blur-sm rounded-lg border border-border text-xs">
              <div className="font-medium text-foreground mb-1">Neuron Types</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  <span className="text-muted-foreground">Input (I)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary/60" />
                  <span className="text-muted-foreground">Hidden</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent/60" />
                  <span className="text-muted-foreground">Output (O)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'hsl(320 80% 60% / 0.6)'}} />
                  <span className="text-muted-foreground">Memory (M)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
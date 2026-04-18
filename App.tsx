import { useState } from 'react';
import { FaDocker, FaGithub, FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiKubernetes, SiJenkins } from 'react-icons/si';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExporting, setIsExporting] = useState(false);

  const slides = [
    {
      title: "Scalable Telemedicine Platform",
      subtitle: "Complete DevOps Implementation - CI/CD, Containerization & Orchestration",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="flex justify-center gap-6 mb-6">
              <FaDocker className="text-6xl text-blue-400 animate-bounce" />
              <SiKubernetes className="text-6xl text-blue-500 animate-bounce delay-100" />
              <SiJenkins className="text-6xl text-red-400 animate-bounce delay-200" />
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-5 rounded-xl mb-6 border-2 border-purple-500">
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">📋 Project Overview</h3>
              <p className="text-gray-200 text-base leading-relaxed max-w-4xl mx-auto">
                A comprehensive end-to-end DevOps implementation featuring <span className="text-green-300 font-semibold">automated CI/CD pipelines</span>, 
                <span className="text-blue-300 font-semibold"> containerization with Docker</span>, 
                <span className="text-purple-300 font-semibold"> orchestration using Kubernetes</span>, and 
                <span className="text-orange-300 font-semibold"> infrastructure automation with Jenkins & Ansible</span> for 
                a modern, scalable telemedicine platform supporting real-time video consultations.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-blue-300">👥 DevOps Team Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg border-2 border-blue-400">
                <span className="font-bold">👨‍💻 Kerolis Khalaf Shafik</span>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg border-2 border-blue-400">
                <span className="font-bold">👨‍💻 Antonios Reda Milad</span>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg border-2 border-blue-400">
                <span className="font-bold">👨‍💻 Mohanad Mohamed Ali</span>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg border-2 border-blue-400">
                <span className="font-bold">👨‍💻 Yassin Wael Fawzy</span>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-lg shadow-lg border-2 border-green-400 md:col-span-2">
                <span className="font-bold">👨‍💻 Ziad Yehia Ahmed</span> <span className="text-yellow-200 text-sm">(Team Lead)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-4 rounded-xl border-2 border-yellow-600">
            <p className="text-center text-lg">
              <span className="text-blue-200">Course Instructor:</span> <span className="font-bold text-yellow-300 text-xl">Eng. Ahmed Gamil</span>
            </p>
            <p className="text-center text-sm text-gray-300 mt-1">DevOps & Cloud Infrastructure Engineering</p>
          </div>

          <div className="grid grid-cols-4 gap-3 text-center text-sm">
            <div className="bg-blue-800/50 p-2 rounded-lg">
              <p className="font-bold text-blue-300">🐳 Docker</p>
              <p className="text-xs text-gray-400">Containerization</p>
            </div>
            <div className="bg-purple-800/50 p-2 rounded-lg">
              <p className="font-bold text-purple-300">☸️ Kubernetes</p>
              <p className="text-xs text-gray-400">Orchestration</p>
            </div>
            <div className="bg-red-800/50 p-2 rounded-lg">
              <p className="font-bold text-red-300">🔄 Jenkins</p>
              <p className="text-xs text-gray-400">CI/CD Pipeline</p>
            </div>
            <div className="bg-green-800/50 p-2 rounded-lg">
              <p className="font-bold text-green-300">⚙️ Ansible</p>
              <p className="text-xs text-gray-400">IaC Automation</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Docker Implementation",
      subtitle: "Microservices Containerization Strategy",
      content: (
        <div className="space-y-5">
          <div className="flex items-center gap-4 mb-4">
            <FaDocker className="text-5xl text-blue-400" />
            <h3 className="text-3xl font-bold">Dockerfile Strategy & Best Practices</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-xl border-2 border-red-500">
              <h4 className="text-xl font-bold mb-3 text-yellow-300">🅰️ Frontend Service (Angular)</h4>
              <ul className="space-y-2 text-sm">
                <li>✅ Multi-stage build for optimal image size</li>
                <li>✅ Nginx Alpine for serving static files</li>
                <li>✅ Angular production build with AOT compilation</li>
                <li>✅ Lightweight Alpine base image (~50MB)</li>
                <li>✅ Custom nginx.conf for SPA routing</li>
                <li>✅ Environment variable injection at runtime</li>
                <li>✅ Security headers configuration</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl border-2 border-green-500">
              <h4 className="text-xl font-bold mb-3 text-yellow-300">🚀 Backend Service (Express.js)</h4>
              <ul className="space-y-2 text-sm">
                <li>✅ Node.js 18 LTS runtime environment</li>
                <li>✅ Express.js RESTful API framework</li>
                <li>✅ Environment variables for configuration</li>
                <li>✅ Health check endpoints for monitoring</li>
                <li>✅ Security best practices (helmet, cors)</li>
                <li>✅ Production dependencies only</li>
                <li>✅ Non-root user for enhanced security</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-5 rounded-xl border-2 border-blue-500">
            <h4 className="text-xl font-bold mb-3 text-yellow-300">🐳 Docker Registry & Image Management (DockerHub)</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-800/50 p-3 rounded-lg">
                <p className="font-semibold text-green-300 mb-1">✓ Image Publishing</p>
                <p className="text-gray-300">All microservice images pushed to DockerHub</p>
                <p className="text-gray-400 text-xs mt-1">Semantic versioning tags (v1.0.0)</p>
              </div>
              <div className="bg-blue-800/50 p-3 rounded-lg">
                <p className="font-semibold text-green-300 mb-1">✓ Automated Builds</p>
                <p className="text-gray-300">CI/CD pipeline integration</p>
                <p className="text-gray-400 text-xs mt-1">Automatic builds on git push</p>
              </div>
              <div className="bg-blue-800/50 p-3 rounded-lg">
                <p className="font-semibold text-green-300 mb-1">✓ Image Optimization</p>
                <p className="text-gray-300">Layer caching & compression</p>
                <p className="text-gray-400 text-xs mt-1">Reduced deployment time by 60%</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Docker Compose & Orchestration",
      subtitle: "Multi-Container Application Setup & Service Communication",
      content: (
        <div className="space-y-5">
          <div className="flex items-center gap-4 mb-4">
            <FaDocker className="text-5xl text-cyan-400" />
            <h3 className="text-3xl font-bold">Docker Compose Configuration</h3>
          </div>
          <div className="bg-gradient-to-br from-cyan-900 to-blue-900 p-5 rounded-xl border-2 border-cyan-500">
            <h4 className="text-xl font-bold mb-4 text-yellow-300">Complete Services Architecture</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-blue-800/70 p-4 rounded-lg border-2 border-red-400">
                <p className="font-bold text-red-300 mb-2">🅰️ Frontend</p>
                <p className="text-xs text-gray-300">Technology: Angular 15</p>
                <p className="text-sm font-semibold text-green-300">Port: 4200</p>
                <p className="text-xs text-gray-400 mt-1">User Interface Layer</p>
                <p className="text-xs text-blue-300">nginx:alpine base</p>
              </div>
              <div className="bg-blue-800/70 p-4 rounded-lg border-2 border-green-400">
                <p className="font-bold text-green-300 mb-2">🚀 Backend API</p>
                <p className="text-xs text-gray-300">Technology: Express.js</p>
                <p className="text-sm font-semibold text-green-300">Port: 3336</p>
                <p className="text-xs text-gray-400 mt-1">Business Logic Layer</p>
                <p className="text-xs text-blue-300">Node.js 18 LTS</p>
              </div>
              <div className="bg-blue-800/70 p-4 rounded-lg border-2 border-purple-400">
                <p className="font-bold text-purple-300 mb-2">📹 WebRTC</p>
                <p className="text-xs text-gray-300">Technology: Socket.io</p>
                <p className="text-sm font-semibold text-green-300">Port: 4440</p>
                <p className="text-xs text-gray-400 mt-1">Real-time Video Calls</p>
                <p className="text-xs text-blue-300">Signaling Server</p>
              </div>
              <div className="bg-blue-800/70 p-4 rounded-lg border-2 border-yellow-400">
                <p className="font-bold text-yellow-300 mb-2">💾 Database</p>
                <p className="text-xs text-gray-300">Technology: mySQL</p>
                <p className="text-sm font-semibold text-green-300">Port: 3306</p>
                <p className="text-xs text-gray-400 mt-1">Data Persistence Layer</p>
                <p className="text-xs text-blue-300">Version 14.5</p>
              </div>
            </div>
          </div>
          
            <div className="bg-gradient-to-br from-pink-900 to-pink-800 p-4 rounded-xl border-2 border-pink-500">
              <h4 className="text-lg font-bold mb-3 text-yellow-300">💾 Volume Management</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Persistent mySQL data volume</li>
                <li>✓ Database backups volume</li>
                <li>✓ Application logs persistence</li>
                <li>✓ Named volumes for easy management</li>
                <li>✓ Data survival across restarts</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-900 to-orange-800 p-4 rounded-xl border-2 border-orange-500">
              <h4 className="text-lg font-bold mb-3 text-yellow-300">⚙️ Configuration</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Environment variables per service</li>
                <li>✓ Health checks configured</li>
                <li>✓ Restart policies (always)</li>
                <li>✓ Resource limits (CPU/Memory)</li>
                <li>✓ Dependency ordering (depends_on)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Jenkins CI/CD Pipeline",
      subtitle: "Fully Automated Build, Test, Deploy & Monitoring System",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <SiJenkins className="text-5xl text-red-400" />
            <h3 className="text-2xl font-bold">Complete Automation Pipeline - Jenkinsfile</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 rounded-xl border-l-4 border-blue-400">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">Stage 1</span>
                <div className="flex-1">
                  <h4 className="font-bold text-yellow-300 text-lg">📥 Source Code Checkout from GitHub</h4>
                  <p className="text-sm text-gray-300 mt-1">Pull latest code from GitHub repository (github.com/ziadyeehia/Team2)</p>
                  <div className="flex gap-4 mt-2 text-xs">
                    <span className="bg-blue-700 px-2 py-1 rounded">✓ Git clone/pull</span>
                    <span className="bg-blue-700 px-2 py-1 rounded">✓ Branch validation</span>
                    <span className="bg-blue-700 px-2 py-1 rounded">✓ Webhook triggers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-900 to-green-800 p-4 rounded-xl border-l-4 border-green-400">
              <div className="flex items-center gap-3">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">Stage 2</span>
                <div className="flex-1">
                  <h4 className="font-bold text-yellow-300 text-lg">🧪 Build & Test Phase</h4>
                  <p className="text-sm text-gray-300 mt-1">Run comprehensive tests: Unit tests, Integration tests, Code quality checks (ESLint, SonarQube)</p>
                  <div className="flex gap-4 mt-2 text-xs">
                    <span className="bg-green-700 px-2 py-1 rounded">✓ npm test</span>
                    <span className="bg-green-700 px-2 py-1 rounded">✓ Code coverage 80%+</span>
                    <span className="bg-green-700 px-2 py-1 rounded">✓ Lint validation</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-4 rounded-xl border-l-4 border-purple-400">
              <div className="flex items-center gap-3">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full font-bold text-sm">Stage 3</span>
                <div className="flex-1">
                  <h4 className="font-bold text-yellow-300 text-lg">🐳 Build Docker Images</h4>
                  <p className="text-sm text-gray-300 mt-1">Create optimized container images for Frontend, Backend, WebRTC services using multi-stage builds</p>
                  <div className="flex gap-4 mt-2 text-xs">
                    <span className="bg-purple-700 px-2 py-1 rounded">✓ docker build</span>
                    <span className="bg-purple-700 px-2 py-1 rounded">✓ Image tagging</span>
                    <span className="bg-purple-700 px-2 py-1 rounded">✓ Layer caching</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-900 to-orange-800 p-4 rounded-xl border-l-4 border-orange-400">
              <div className="flex items-center gap-3">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm">Stage 4</span>
                <div className="flex-1">
                  <h4 className="font-bold text-yellow-300 text-lg">📦 Push to Registry & Artifactory</h4>
                  <p className="text-sm text-gray-300 mt-1">Upload Docker images to DockerHub registry and store build artifacts in JFrog Artifactory for versioning</p>
                  <div className="flex gap-4 mt-2 text-xs">
                    <span className="bg-orange-700 px-2 py-1 rounded">✓ docker push</span>
                    <span className="bg-orange-700 px-2 py-1 rounded">✓ Semantic versioning</span>
                    <span className="bg-orange-700 px-2 py-1 rounded">✓ Artifact archiving</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-900 to-red-800 p-4 rounded-xl border-l-4 border-red-400">
              <div className="flex items-center gap-3">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">Stage 5</span>
                <div className="flex-1">
                  <h4 className="font-bold text-yellow-300 text-lg">🚀 Automated Deployment with Ansible</h4>
                  <p className="text-sm text-gray-300 mt-1">Deploy to production servers using Ansible playbooks with zero-downtime rolling updates strategy</p>
                  <div className="flex gap-4 mt-2 text-xs">
                    <span className="bg-red-700 px-2 py-1 rounded">✓ Ansible playbook</span>
                    <span className="bg-red-700 px-2 py-1 rounded">✓ Rolling updates</span>
                    <span className="bg-red-700 px-2 py-1 rounded">✓ Health checks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 p-3 rounded-xl border-2 border-cyan-500 mt-4">
            <p className="text-center text-sm"><span className="font-bold text-yellow-300">⏱️ Pipeline Execution Time:</span> <span className="text-green-300">~8-12 minutes</span> | <span className="font-bold text-yellow-300">📊 Success Rate:</span> <span className="text-green-300">95%+</span></p>
          </div>
        </div>
      )
    },
    {
      title: "Kubernetes System Design",
      subtitle: "Highly Scalable, Resilient & Self-Healing Cloud-Native Infrastructure",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <SiKubernetes className="text-5xl text-blue-500" />
            <h3 className="text-2xl font-bold">Kubernetes Orchestration Architecture</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 rounded-xl border-2 border-blue-500">
              <h4 className="text-lg font-bold mb-3 text-yellow-300">🚀 Deployments & ReplicaSets</h4>
              <ul className="space-y-1.5 text-sm">
                <li>✓ High availability with 3+ replicas per service</li>
                <li>✓ Rolling updates with zero downtime deployment</li>
                <li>✓ Rollback capability to previous versions</li>
                <li>✓ Liveness & Readiness health probes configured</li>
                <li>✓ Auto-restart on container failure</li>
                <li>✓ Resource requests & limits defined</li>
                <li>✓ Pod Anti-Affinity for node distribution</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900 to-green-800 p-4 rounded-xl border-2 border-green-500">
              <h4 className="text-lg font-bold mb-3 text-yellow-300">⚖️ Services & Load Balancing</h4>
              <ul className="space-y-1.5 text-sm">
                <li>✓ ClusterIP services for internal communication</li>
                <li>✓ LoadBalancer type for external access</li>
                <li>✓ DNS-based service discovery (CoreDNS)</li>
                <li>✓ Nginx Ingress Controller with SSL/TLS</li>
                <li>✓ Session affinity for stateful connections</li>
                <li>✓ Round-robin load balancing algorithm</li>
                <li>✓ Health-based traffic routing</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-4 rounded-xl border-2 border-purple-500">
              <h4 className="text-lg font-bold mb-3 text-yellow-300">📊 Horizontal Pod Autoscaler (HPA)</h4>
              <ul className="space-y-1.5 text-sm">
                <li>✓ CPU-based auto-scaling (target: 70% utilization)</li>
                <li>✓ Memory-based scaling triggers</li>
                <li>✓ Custom metrics support (requests/sec)</li>
                <li>✓ Scale range: 2 (min) to 10 (max) pods</li>
                <li>✓ Scale-up cooldown: 3 minutes</li>
                <li>✓ Scale-down cooldown: 5 minutes</li>
                <li>✓ Metrics server integration</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-900 to-orange-800 p-4 rounded-xl border-2 border-orange-500">
              <h4 className="text-lg font-bold mb-3 text-yellow-300">🔒 Security & Configuration</h4>
              <ul className="space-y-1.5 text-sm">
                <li>✓ Kubernetes Secrets for sensitive data</li>
                <li>✓ ConfigMaps for application configuration</li>
                <li>✓ RBAC (Role-Based Access Control) policies</li>
                <li>✓ Network policies for pod isolation</li>
                <li>✓ Pod Security Policies enforced</li>
                <li>✓ Image pull secrets configured</li>
                <li>✓ TLS certificates for encrypted traffic</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-pink-900 to-pink-800 p-3 rounded-xl border-2 border-pink-500">
              <h4 className="text-base font-bold mb-2 text-yellow-300">💾 Persistent Storage</h4>
              <ul className="space-y-1 text-xs">
                <li>✓ PersistentVolumeClaims for database</li>
                <li>✓ StorageClass with dynamic provisioning</li>
                <li>✓ Volume snapshots for backups</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-teal-900 to-teal-800 p-3 rounded-xl border-2 border-teal-500">
              <h4 className="text-base font-bold mb-2 text-yellow-300">📡 Monitoring & Logging</h4>
              <ul className="space-y-1 text-xs">
                <li>✓ Prometheus metrics collection</li>
                <li>✓ Grafana dashboards for visualization</li>
                <li>✓ Centralized logging with ELK stack</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 p-4 rounded-xl border-2 border-cyan-500">
            <h4 className="text-xl font-bold mb-2 text-yellow-300 text-center">
              <FaGithub className="inline mr-2" />
              Complete Project Repository
            </h4>
            <p className="text-center text-blue-300 text-lg font-semibold">
              🔗 github.com/ziadyeehia/Team2
            </p>
            <p className="text-center text-sm text-gray-300 mt-2">
              📁 Includes: Dockerfiles (Frontend/Backend/WebRTC) | Jenkinsfile (CI/CD Pipeline) | Ansible Playbooks (IaC) | K8s Manifests (Deployments/Services/Ingress) | Complete Documentation & README files
            </p>
            <div className="flex justify-center gap-6 mt-3 text-xs">
              <span className="bg-green-700 px-3 py-1 rounded-full">✓ Production Ready</span>
              <span className="bg-blue-700 px-3 py-1 rounded-full">✓ Fully Documented</span>
              <span className="bg-purple-700 px-3 py-1 rounded-full">✓ Best Practices</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const exportToPDF = async () => {
    setIsExporting(true);
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    const slideElements = document.querySelectorAll('.slide-content');

    for (let i = 0; i < slideElements.length; i++) {
      const element = slideElements[i] as HTMLElement;
      element.classList.add('active');
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#0f172a'
      });

      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 297; // A4 landscape width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (i > 0) {
        pdf.addPage();
      }
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      element.classList.remove('active');
    }

    pdf.save('DevOps-Deployment-Presentation-Team2.pdf');
    setIsExporting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg border-b-4 border-blue-500">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <SiKubernetes className="text-4xl text-blue-400" />
            <h1 className="text-2xl font-bold">DevOps Deployment Presentation</h1>
          </div>
          <button
            onClick={exportToPDF}
            disabled={isExporting}
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaDownload />
            {isExporting ? 'Exporting...' : 'Export to PDF'}
          </button>
        </div>
      </header>

      {/* Main Presentation Area */}
      <main className="container mx-auto px-6 py-8">
        {/* Current Slide Display */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-10 mb-6 border-2 border-blue-500">
          <div className="mb-8 text-center">
            <h2 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl text-blue-300">{slides[currentSlide].subtitle}</p>
          </div>
          <div className="min-h-[400px]">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            disabled={currentSlide === 0}
          >
            <FaChevronLeft />
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            disabled={currentSlide === slides.length - 1}
          >
            Next
            <FaChevronRight />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-6 text-blue-300">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </main>

      {/* Hidden slides for PDF export */}
      <div className="hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide-content w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-16"
          >
            <div className="mb-12 text-center">
              <h2 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {slide.title}
              </h2>
              <p className="text-3xl text-blue-300">{slide.subtitle}</p>
            </div>
            <div className="text-2xl">
              {slide.content}
            </div>
            <div className="absolute bottom-8 right-8 text-blue-300 text-xl">
              Slide {index + 1} / {slides.length}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 border-t-4 border-blue-500 mt-12">
        <div className="container mx-auto px-6 py-6 text-center">
          <p className="text-blue-200">
            DevOps Team 2 - Scalable Telemedicine Platform | Instructor: Eng. Ahmed Gamil
          </p>
          <p className="text-sm text-blue-300 mt-2">
            <FaGithub className="inline mr-2" />
            github.com/ziadyeehia/Team2
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

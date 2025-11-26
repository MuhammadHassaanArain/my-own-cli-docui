"use client"
import React, { useState } from 'react';
import { Terminal, Command, Zap, BookOpen, Code, ArrowRight, Menu, X, Copy, Check } from 'lucide-react';

export default function CLIDocsSite() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState('');

  const copyToClipboard = (text:any) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(''), 2000);
  };
  const commands = [
    {
      id: 'init',
      name: 'init',
      usage: 'my-own-cli init',
      description: 'Initialize a new project with AI-powered setup',
      example: 'my-own-cli init --template react'
    },
    {
      id: 'chat',
      name: 'chat',
      usage: 'my-own-cli chat [message]',
      description: 'Start an interactive chat session with the AI agent',
      example: 'my-own-cli chat "How do I optimize this code?"'
    },
    {
      id: 'generate',
      name: 'generate',
      usage: 'my-own-cli generate [type]',
      description: 'Generate code, components, or files using AI',
      example: 'my-own-cli generate component Button'
    },
    {
      id: 'analyze',
      name: 'analyze',
      usage: 'my-own-cli analyze [file]',
      description: 'Analyze code quality, security, and performance',
      example: 'my-own-cli analyze src/app.js'
    },
    {
      id: 'refactor',
      name: 'refactor',
      usage: 'my-own-cli refactor [file]',
      description: 'Intelligently refactor and improve your code',
      example: 'my-own-cli refactor --pattern observer'
    },
    {
      id: 'test',
      name: 'test',
      usage: 'my-own-cli test [options]',
      description: 'Generate and run tests for your code',
      example: 'my-own-cli test --coverage'
    },
    {
      id: 'docs',
      name: 'docs',
      usage: 'my-own-cli docs [action]',
      description: 'Generate or update documentation automatically',
      example: 'my-own-cli docs generate --format markdown'
    },
    {
      id: 'commit',
      name: 'commit',
      usage: 'my-own-cli commit',
      description: 'Generate intelligent commit messages from changes',
      example: 'my-own-cli commit --auto'
    }
  ];
  const sections = [
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'commands', name: 'Commands', icon: Command },
    { id: 'examples', name: 'Examples', icon: Code },
    { id: 'api', name: 'API Reference', icon: BookOpen }
  ];
  const CommandBlock = ({ command, example }:{command?:string, example?:string}) => (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm relative group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-emerald-400">$</span>
        <button
          onClick={() => copyToClipboard(example)}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-800 rounded"
        >
          {copiedCommand === example ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
      <code className="text-gray-300">{example}</code>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Terminal className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  my-own-cli
                </h1>
                <p className="text-xs text-gray-400">AI-Powered Terminal Agent</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-1">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-900">
            <nav className="px-4 py-4 space-y-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'text-gray-400 hover:bg-gray-800'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      {activeSection === 'getting-started' && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400">Supercharge Your Terminal</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              AI Agent in Your Terminal
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Build, analyze, refactor, and ship faster with an intelligent CLI assistant that understands your code and workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <CommandBlock 
                example="pip install git+https://github.com/MuhammadHassaanArain/my_own_cli.git"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-400 text-sm">Execute commands and get AI responses in milliseconds</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Context Aware</h3>
                <p className="text-gray-400 text-sm">Understands your project structure and codebase</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Terminal className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Seamless Workflow</h3>
                <p className="text-gray-400 text-sm">Integrates perfectly with your existing tools</p>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Commands Section */}
      {activeSection === 'commands' && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Command Reference</h2>
            <p className="text-gray-400 text-center mb-12">Complete list of available commands</p>
            
            <div className="space-y-6">
              {/* My Own CLI Installation and Usage */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">My Own CLI</h3>
                    <p className="text-gray-300 mb-4">
                      Instructions to install and run <strong>My Own CLI</strong>, your AI-powered CLI agent.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {/* Method 1: Direct pip install */}
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Method 1: Install via pip</span>
                    <div className="mt-2 bg-gray-950 rounded-lg p-3 font-mono text-sm text-cyan-400 space-y-2">
                      <div># Install the CLI package</div>
                      <div>pip install git+https://github.com/MuhammadHassaanArain/my_own_cli.git</div>
                      <div># Run the MCP server</div>
                      <div>uv run uvicorn mcp_server.server:mcp_app --host 127.0.0.1 --port 8000 --reload</div>
                      <div># Run the CLI agent</div>
                      <div>my-own-cli</div>
                    </div>
                  </div>

                  {/* Method 2: Clone repo */}
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Method 2: Clone repository</span>
                    <div className="mt-2 bg-gray-950 rounded-lg p-3 font-mono text-sm text-cyan-400 space-y-2">
                      <div># Clone the repository</div>
                      <div>git clone https://github.com/MuhammadHassaanArain/my_own_cli.git</div>
                      <div># Enter project directory</div>
                      <div>cd my_own_cli</div>
                      <div># Run the MCP server</div>
                      <div>uv run uvicorn mcp_server.server:mcp_app --host 127.0.0.1 --port 8000 --reload</div>
                      <div># Run the CLI agent</div>
                      <div>uv run cli.main</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

            {/* Examples Section */}
      {activeSection === 'examples' && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Usage Examples</h2>
            <p className="text-gray-400 text-center mb-12">Simple prompts to start using My Own CLI</p>

            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-emerald-400" />
                  Basic Prompts
                </h3>
                <div className="space-y-3">
                  <CommandBlock example="my-own-cli: create-folder named made_by_agent at D:/my_path" />
                  <p className="text-sm text-gray-400 pl-4">Create a folder at D:/my_path</p>

                  <CommandBlock example="my-own-cli: create-file greeting.py at D:/my_path/made_by_agent" />
                  <p className="text-sm text-gray-400 pl-4">Create a Python file in that folder</p>

                  <CommandBlock example={`my-own-cli: write a simple greeting funtion in the file  D:/my_path/made_by_agent/greeting.py `} />
                  <p className="text-sm text-gray-400 pl-4">Write a simple greeting function in the file</p>

                  <CommandBlock example="my-own-cli: search for the word greeting in  D:/my_path/file.txt" />
                  <p className="text-sm text-gray-400 pl-4">Search for the word 'greet' in the file</p>

                  <CommandBlock example="my-own-cli: run the commad  dir at D:/my_path" />
                  <p className="text-sm text-gray-400 pl-4">List the contents of the folder using a shell command</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* First-Time User Guide Section */}
      {activeSection === 'api' && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Getting Started</h2>
            <p className="text-gray-400 text-center mb-12">
              Step-by-step guide for first-time users to run <strong>My Own CLI</strong>
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 space-y-6">
              {/* Step 1: Follow commands */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">1. Install and Run the CLI</h3>
                <p className="text-gray-400 mb-2">
                  First, follow the installation commands listed in the <strong>Commands</strong> section to install and start the MCP server.
                </p>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm text-cyan-400">
                  # Example for pip install method<br/>
                  pip install git+https://github.com/MuhammadHassaanArain/my_own_cli.git<br/>
                  uv run uvicorn mcp_server.server:mcp_app --host 127.0.0.1 --port 8000 --reload<br/>
                  my-own-cli
                </div>
              </div>

              {/* Step 2: Enter API key */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">2. Enter your API Key</h3>
                <p className="text-gray-400 mb-2">
                  On first run, the agent will prompt you to enter your API key. You need a Google Gemini API key to continue.
                </p>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm text-yellow-400 space-y-2">
                  <div>Enter your API key : PASTE API KEY HERE </div>
                
                </div>
                <p className="text-gray-400 mt-2">
                  Paste your API key here, and once accepted, you are ready to use <strong>My Own CLI</strong>!
                </p>
              </div>

              {/* Step 3: Ready to use */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">3. Start using the CLI</h3>
                <p className="text-gray-400">
                  After entering your API key, you can start issuing commands to your agent. Explore the <strong>Commands</strong> section for available actions.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center text-gray-400">
            <p className="mb-2">Built with ❤️ for developers who love their terminal</p>
            <p className="text-sm">© 2025 my-own-cli. Open source Project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
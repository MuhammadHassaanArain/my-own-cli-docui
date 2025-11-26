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
                example="npm install -g my-own-cli"
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
              {commands.map(cmd => (
                <div key={cmd.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-400 mb-2">{cmd.name}</h3>
                      <p className="text-gray-300 mb-4">{cmd.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-500 uppercase tracking-wide">Usage</span>
                      <div className="mt-2 bg-gray-950 rounded-lg p-3 font-mono text-sm text-cyan-400">
                        {cmd.usage}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm text-gray-500 uppercase tracking-wide">Example</span>
                      <div className="mt-2">
                        <CommandBlock example={cmd.example} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Examples Section */}
      {activeSection === 'examples' && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Usage Examples</h2>
            <p className="text-gray-400 text-center mb-12">Real-world scenarios and workflows</p>
            
            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-emerald-400" />
                  Quick Start New Project
                </h3>
                <div className="space-y-3">
                  <CommandBlock example="my-own-cli init --template react-typescript" />
                  <CommandBlock example="my-own-cli generate component Header --props title,subtitle" />
                  <CommandBlock example="my-own-cli test --watch" />
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-cyan-400" />
                  Code Analysis & Refactoring
                </h3>
                <div className="space-y-3">
                  <CommandBlock example="my-own-cli analyze src/ --security --performance" />
                  <CommandBlock example="my-own-cli refactor src/utils/helper.js --suggest" />
                  <CommandBlock example="my-own-cli docs generate --output docs/" />
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-purple-400" />
                  Interactive Development
                </h3>
                <div className="space-y-3">
                  <CommandBlock example="my-own-cli chat" />
                  <p className="text-sm text-gray-400 pl-4">Then ask: "How can I optimize database queries in my app?"</p>
                  <CommandBlock example="my-own-cli commit --auto --conventional" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* API Reference Section */}
      {activeSection === 'api' && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">API Reference</h2>
            <p className="text-gray-400 text-center mb-12">Configuration and advanced options</p>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Configuration File</h3>
              <p className="text-gray-400 mb-4">Create a <code className="bg-gray-950 px-2 py-1 rounded text-emerald-400">my-own-cli.config.json</code> in your project root:</p>
              
              <div className="bg-gray-950 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">{`{
  "model": "advanced",
  "context": {
    "includeFiles": ["src/**/*.js", "*.md"],
    "excludeFiles": ["node_modules/**"]
  },
  "preferences": {
    "codeStyle": "airbnb",
    "testFramework": "jest",
    "commitStyle": "conventional"
  },
  "apiKey": "your-api-key-here"
}`}</pre>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Environment Variables</h4>
                <div className="space-y-2">
                  <div className="bg-gray-950 rounded-lg p-4">
                    <code className="text-cyan-400">MY_OWN_CLI_API_KEY</code>
                    <p className="text-sm text-gray-400 mt-1">Your API authentication key</p>
                  </div>
                  <div className="bg-gray-950 rounded-lg p-4">
                    <code className="text-cyan-400">MY_OWN_CLI_MODEL</code>
                    <p className="text-sm text-gray-400 mt-1">AI model to use (basic, advanced, expert)</p>
                  </div>
                  <div className="bg-gray-950 rounded-lg p-4">
                    <code className="text-cyan-400">MY_OWN_CLI_VERBOSE</code>
                    <p className="text-sm text-gray-400 mt-1">Enable detailed logging (true/false)</p>
                  </div>
                </div>
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
            <p className="text-sm">© 2024 my-own-cli. Open source and community driven.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
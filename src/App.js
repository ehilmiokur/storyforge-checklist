// StoryForge Setup Checklist
import { useState } from "react";

const phases = [
  {
    id: "accounts",
    emoji: "🔑",
    title: "Phase 0 — Open Your Accounts",
    color: "blue",
    steps: [
      {
        id: "github",
        title: "Create GitHub Account",
        url: "https://github.com",
        details: [
          "Go to github.com → click Sign Up",
          "use @live.com email",
          "Choose a username (this will be on your portfolio!)",
          "Verify your email",
        ],
        tip: "Your GitHub username will be visible to employers — pick something professional.",
      },
      {
        id: "azure",
        title: "Create Azure Account",
        url: "https://portal.azure.com",
        details: [
          "Go to portal.azure.com → click Sign In",
          "use @live.com Microsoft account",
          "If no subscription exists → click 'Start Free'",
          "Enter credit card (won't be charged — just for verification)",
          "You get $200 free credits for 30 days",
        ],
        tip: "Set a spending limit of $0 in Azure Cost Management to make sure you're never charged accidentally.",
      },
      {
        id: "devazure",
        title: "Create Azure DevOps Account",
        url: "https://dev.azure.com",
        details: [
          "Go to dev.azure.com → sign in with same @live.com",
          "Click 'Create new organization'",
          "Name it something like 'storyforge-dev' or your name",
          "Create a new project called 'StoryForge'",
        ],
        tip: "Same Microsoft login as Azure — they're linked automatically.",
      },
    ],
  },
  {
    id: "local",
    emoji: "💻",
    title: "Phase 1 — Set Up Your Computer",
    color: "purple",
    steps: [
      {
        id: "vscode",
        title: "Install VS Code",
        url: "https://code.visualstudio.com",
        details: [
          "Download from code.visualstudio.com",
          "Install with default settings",
          "Open it — this is where you'll write all your code",
        ],
        tip: "Install these extensions: 'GitLens', 'Azure Tools', 'Prettier'",
      },
      {
        id: "nodejs",
        title: "Install Node.js",
        url: "https://nodejs.org",
        details: [
          "Go to nodejs.org → download the LTS version",
          "Install with default settings",
          "Open a terminal in VS Code → type: node --version",
          "You should see something like v20.x.x ✅",
        ],
        tip: "Node.js lets you run JavaScript on your computer and powers your React app.",
      },
      {
        id: "git",
        title: "Install Git",
        url: "https://git-scm.com",
        details: [
          "Go to git-scm.com → download for your OS",
          "Install with default settings",
          "Open terminal → type: git --version",
          "You should see git version 2.x.x ✅",
          "Run: git config --global user.email 'your@live.com'",
          "Run: git config --global user.name 'Your Name'",
        ],
        tip: "Git is how your code travels from your laptop to GitHub to Azure.",
      },
      {
        id: "azurecli",
        title: "Install Azure CLI",
        url: "https://learn.microsoft.com/en-us/cli/azure/install-azure-cli",
        details: [
          "Search 'Install Azure CLI' on Microsoft Docs",
          "Download for your OS and install",
          "Open terminal → type: az --version",
          "Then type: az login → a browser opens → sign in with @live.com",
        ],
        tip: "Azure CLI lets you control all of Azure from your terminal — very DevOps!",
      },
    ],
  },
  {
    id: "app",
    emoji: "🏗️",
    title: "Phase 2 — Create Your First App",
    color: "green",
    steps: [
      {
        id: "react",
        title: "Create the React App",
        details: [
          "Open terminal in VS Code",
          "Run: npx create-react-app storyforge",
          "Wait ~2 minutes for it to install",
          "Run: cd storyforge",
          "Run: npm start",
          "Browser opens at localhost:3000 — your app is running! 🎉",
        ],
        tip: "You just created a web app. It only runs on your computer for now — next steps make it live.",
      },
      {
        id: "github-push",
        title: "Push Code to GitHub",
        details: [
          "Go to github.com → click '+' → New Repository",
          "Name it 'storyforge' → make it Public → Create",
          "In VS Code terminal run: git remote add origin https://github.com/YOURUSERNAME/storyforge.git",
          "Run: git add .",
          "Run: git commit -m 'first commit'",
          "Run: git push -u origin main",
          "Refresh GitHub — your code is there! ✅",
        ],
        tip: "Every time you push code to GitHub, it will trigger your pipeline to auto-deploy.",
      },
    ],
  },
  {
    id: "azure-deploy",
    emoji: "🚀",
    title: "Phase 3 — Deploy to Azure",
    color: "orange",
    steps: [
      {
        id: "appservice",
        title: "Create Azure App Service",
        details: [
          "Go to portal.azure.com",
          "Search 'App Service' → click Create",
          "Resource Group: Create new → name it 'storyforge-rg'",
          "Name: 'storyforge-app' (this becomes your URL!)",
          "Runtime: Node 20 LTS",
          "Plan: Free F1 (so it's free!)",
          "Click Review + Create → Create",
          "Wait ~1 minute → your hosting is ready ✅",
        ],
        tip: "Your app will be live at storyforge-app.azurewebsites.net",
      },
      {
        id: "pipeline",
        title: "Set Up CI/CD Pipeline in Azure DevOps",
        details: [
          "Go to dev.azure.com → your StoryForge project",
          "Click Pipelines → Create Pipeline",
          "Select GitHub → authorize → pick your storyforge repo",
          "Select 'Node.js' template",
          "Add a deploy step pointing to your App Service",
          "Click Save and Run",
          "Watch the pipeline run and deploy! 🎉",
        ],
        tip: "From now on, every git push = automatic deployment. That's CI/CD in action!",
      },
      {
        id: "live",
        title: "Visit Your Live App 🎉",
        details: [
          "Go to portal.azure.com → App Service → storyforge-app",
          "Click the URL: storyforge-app.azurewebsites.net",
          "Your React app is live on the internet!",
          "Make any change in VS Code → git push → watch it auto-deploy",
        ],
        tip: "Screenshot this moment. This is the foundation everything else is built on.",
      },
    ],
  },
];

const colorMap = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-100 text-blue-700", dot: "bg-blue-500", header: "bg-blue-600" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-700", dot: "bg-purple-500", header: "bg-purple-600" },
  green: { bg: "bg-green-50", border: "border-green-200", badge: "bg-green-100 text-green-700", dot: "bg-green-500", header: "bg-green-600" },
  orange: { bg: "bg-orange-50", border: "border-orange-200", badge: "bg-orange-100 text-orange-700", dot: "bg-orange-500", header: "bg-orange-600" },
};

export default function SetupChecklist() {
  const allStepIds = phases.flatMap(p => p.steps.map(s => s.id));
  const [checked, setChecked] = useState({});
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleExpand = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const totalDone = allStepIds.filter(id => checked[id]).length;
  const totalSteps = allStepIds.length;
  const progress = Math.round((totalDone / totalSteps) * 100);

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 mb-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🎬</span>
          <div>
            <h1 className="text-xl font-bold">StoryForge Setup Checklist</h1>
            <p className="text-slate-300 text-sm">My DevOps learning journey — zero to deployed</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>{totalDone} of {totalSteps} steps done</span>
            <span className="font-bold">{progress}%</span>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <p className="text-green-300 text-sm mt-2 font-bold">🎉 You're live! Your DevOps journey has begun.</p>
          )}
        </div>
      </div>

      {/* Phases */}
      {phases.map(phase => {
        const c = colorMap[phase.color];
        const phaseDone = phase.steps.filter(s => checked[s.id]).length;
        return (
          <div key={phase.id} className={`rounded-2xl border ${c.border} ${c.bg} mb-5 overflow-hidden`}>
            <div className={`${c.header} text-white px-5 py-3 flex justify-between items-center`}>
              <span className="font-bold text-base">{phase.emoji} {phase.title}</span>
              <span className={`text-xs px-2 py-1 rounded-full bg-white bg-opacity-20`}>
                {phaseDone}/{phase.steps.length}
              </span>
            </div>
            <div className="p-4 space-y-3">
              {phase.steps.map((step, i) => {
                const done = checked[step.id];
                const open = expanded[step.id];
                return (
                  <div key={step.id} className={`bg-white rounded-xl border ${done ? 'border-green-300' : 'border-gray-200'} overflow-hidden transition-all`}>
                    <div
                      className="flex items-center gap-3 p-4 cursor-pointer"
                      onClick={() => toggleExpand(step.id)}
                    >
                      <button
                        onClick={e => { e.stopPropagation(); toggle(step.id); }}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${done ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}
                      >
                        {done && <span className="text-white text-xs font-bold">✓</span>}
                      </button>
                      <div className="flex-1">
                        <p className={`font-semibold text-sm ${done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                          Step {i + 1}: {step.title}
                        </p>
                      </div>
                      <span className="text-gray-400 text-xs">{open ? '▲' : '▼'}</span>
                    </div>
                    {open && (
                      <div className="px-4 pb-4 border-t border-gray-100 pt-3">
                        <ul className="space-y-2 mb-3">
                          {step.details.map((d, j) => (
                            <li key={j} className="flex gap-2 text-sm text-gray-700">
                              <span className={`w-5 h-5 rounded-full ${c.dot} text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5`}>{j + 1}</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                        {step.tip && (
                          <div className={`${c.bg} ${c.border} border rounded-lg p-3 text-xs text-gray-600`}>
                            💡 <strong>Tip:</strong> {step.tip}
                          </div>
                        )}
                        {step.url && (
                          <a href={step.url} target="_blank" rel="noopener noreferrer"
                            className={`inline-block mt-3 text-xs px-3 py-1.5 rounded-lg ${c.badge} font-medium`}>
                            → Open {step.url.replace('https://', '')}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <p className="text-center text-xs text-gray-400 mt-2">Check off each step as you complete it — progress saves in this session</p>
    </div>
  );
}

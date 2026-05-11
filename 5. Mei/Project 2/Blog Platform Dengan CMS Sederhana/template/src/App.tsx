import * as React from 'react';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Posts from './views/Posts';
import Categories from './views/Categories';
import Users from './views/Users';
import Profile from './views/Profile';
import Shell from './components/layout/Shell';
import { TooltipProvider } from '@/components/ui/tooltip';

type View = 'dashboard' | 'posts' | 'categories' | 'users' | 'profile';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<'login' | 'register'>('login');
  const [activeView, setActiveView] = React.useState<View>('dashboard');

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthMode('login');
    setActiveView('dashboard');
  };

  const content = () => {
    // 1. If not authenticated, show auth screens
    if (!isAuthenticated) {
      if (authMode === 'login') {
        return <Login onLogin={handleAuthSuccess} onSwitchToRegister={() => setAuthMode('register')} />;
      }
      return <Register onRegister={handleAuthSuccess} onSwitchToLogin={() => setAuthMode('login')} />;
    }

    // 2. Main Application Shell
    return (
      <Shell onLogout={handleLogout} activeView={activeView} setActiveView={(v) => setActiveView(v as View)}>
        {activeView === 'dashboard' && <Dashboard />}
        {activeView === 'posts' && <Posts />}
        {activeView === 'categories' && <Categories />}
        {activeView === 'users' && <Users />}
        {activeView === 'profile' && <Profile />}
      </Shell>
    );
  };

  return (
    <TooltipProvider>
      {content()}
    </TooltipProvider>
  );
}



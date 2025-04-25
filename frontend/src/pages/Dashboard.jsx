import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import {
  FiUser,
  FiFolder,
  FiVideo,
  FiFileText,
  FiMail,
  FiTrendingUp,
  FiActivity,
} from "react-icons/fi";
import { CiLogout } from "react-icons/ci";

const Dashboard = () => {
  const { user, logout, loading } = useUser();
  const navigate = useNavigate();

  // Redirect to home if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  // Optional loading screen
  if (loading || !user) {
    return <div className="p-4 text-white">Loading...</div>;
  }

  const bentoItems = [
    {
      id: 1,
      title: "Profile",
      icon: <FiUser className="text-blue-400 text-xl" />,
      description: "View and edit your profile details",
      color: "border-blue-500/20",
    },
    {
      id: 2,
      title: "Secure Document Vault",
      icon: <FiFolder className="text-purple-400 text-xl" />,
      description: "Store resumes, cover letters, aadhar and other proof docs",
      color: "border-purple-500/20",
    },
    {
      id: 3,
      title: "Mock Interviews",
      icon: <FiVideo className="text-green-400 text-xl" />,
      description: "Practice with AI-powered interview simulations",
      color: "border-green-500/20",
    },
    {
      id: 4,
      title: "Resume Builder",
      icon: <FiFileText className="text-yellow-400 text-xl" />,
      description: "Create professional, ATS-friendly resumes",
      color: "border-yellow-500/20",
    },
    {
      id: 5,
      title: "Cover Letter Crafter",
      icon: <FiMail className="text-red-400 text-xl" />,
      description: "Generate personalized cover letters",
      color: "border-red-500/20",
    },
    {
      id: 6,
      title: "Skill Gap Finder",
      icon: <FiTrendingUp className="text-cyan-400 text-xl" />,
      description: "Identify skills to develop for your dream role",
      color: "border-cyan-500/20",
    },
    {
      id: 7,
      title: "Resume Progress Tracker",
      icon: <FiActivity className="text-amber-400 text-xl" />,
      description: "Monitor application status and improvements",
      color: "border-amber-500/20",
    },
  ];

  return (
    <div className="flex bg-gradient-to-l h-screen from-slate-950 to-slate-800 font-manrope">
      {/* Sidebar */}
      <aside className="w-16 md:w-20 bg-slate-900 border-r border-slate-700 fixed md:sticky top-0 h-full z-40">
        <div className="flex flex-col h-full justify-between items-center py-6">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            aria-label="Logout"
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all cursor-not-allowed"
          >
            <CiLogout size={24} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto ml-16 md:ml-20">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 mt-2">
              Welcome back! Manage your job application tools.
            </p>
          </header>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bentoItems.map((item) => (
              <div
                key={item.id}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border ${item.color} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="ml-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity Section */}
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-white mb-4">
              Recent Activity
            </h2>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/30 rounded-lg p-4">
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center py-2 border-b border-slate-700/30 last:border-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                    <div>
                      <p className="text-gray-300 text-sm">
                        Updated resume for Software Developer position
                      </p>
                      <span className="text-gray-500 text-xs">2 hours ago</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

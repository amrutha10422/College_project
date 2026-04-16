import { useState } from "react";
import { useNavigate } from "react-router-dom";

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 5 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

export default function FacultyLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [showDemo, setShowDemo] = useState(false);
  const [error, setError] = useState("");

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setError("");
  };

  const handleSignIn = () => {
    // Validate all fields
    if (!username.trim()) {
      setError("Please enter your username.");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }
    if (!captchaInput.trim()) {
      setError("Please enter the CAPTCHA code.");
      return;
    }
    if (captchaInput.trim().toUpperCase() !== captcha) {
      setError("Incorrect CAPTCHA. Please try again.");
      setCaptchaInput("");
      refreshCaptcha();
      return;
    }
    // All valid — navigate
    setError("");
    navigate("/dashboard/faculty");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100">
      <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl bg-white mx-4">

        {/* Header */}
        <div className="bg-gradient-to-br from-violet-600 via-indigo-500 to-violet-800 px-8 pt-10 pb-8 text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mx-auto mb-5">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
              <path d="M12 3L2 9v1h2v8H2v2h20v-2h-2V10h2V9L12 3zm0 2.5L20 10v8H4V10l8-4.5zM10 10h4v8h-4z" />
            </svg>
          </div>
          <div className="text-white text-xl font-bold mb-1">Faculty Access</div>
          <div className="text-white/70 text-sm">Teaching Portal Login</div>
        </div>

        {/* Form Body */}
        <div className="px-8 pt-6 pb-8 bg-white">

          {/* Demo Credentials */}
          <div
            onClick={() => setShowDemo(!showDemo)}
            className="border-2 border-violet-200 rounded-2xl p-3 text-center cursor-pointer text-violet-700 text-sm font-medium mb-6 flex items-center justify-center gap-2 hover:bg-violet-50 transition-all"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Show Demo Credentials
          </div>

          {showDemo && (
            <div className="bg-violet-50 border border-violet-200 rounded-xl px-4 py-3 mb-5 text-sm text-violet-900">
              <div>Username: <strong>faculty01</strong></div>
              <div>Password: <strong>demo@1234</strong></div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-300 rounded-xl px-4 py-3 mb-5 flex items-center gap-2 text-sm text-red-600">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {error}
            </div>
          )}

          {/* Username */}
          <label className="block text-sm font-semibold text-gray-600 mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => { setUsername(e.target.value); setError(""); }}
            className="w-full px-4 py-3.5 rounded-2xl bg-gray-100 text-sm text-gray-900 outline-none mb-5 focus:bg-violet-50 focus:ring-2 focus:ring-violet-300 transition-all"
          />

          {/* Password */}
          <label className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
          <div className="relative mb-5">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              className="w-full px-4 py-3.5 pr-12 rounded-2xl bg-gray-100 text-sm text-gray-900 outline-none focus:bg-violet-50 focus:ring-2 focus:ring-violet-300 transition-all"
            />
            <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {showPassword ? (
                  <><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>
                ) : (
                  <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                )}
              </svg>
            </button>
          </div>

          {/* CAPTCHA */}
          <label className="block text-sm font-semibold text-gray-600 mb-2">Security Verification</label>
          <div className="flex gap-3 mb-3 items-center">
            <div className="flex-1 bg-gray-100 rounded-2xl py-3.5 text-center text-2xl font-bold tracking-[8px] text-gray-900 font-mono select-none">
              {captcha}
            </div>
            <button onClick={refreshCaptcha} className="text-gray-400 hover:text-violet-600 p-2 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
              </svg>
            </button>
          </div>

          <input
            type="text"
            placeholder="Enter the code above"
            value={captchaInput}
            onChange={(e) => { setCaptchaInput(e.target.value); setError(""); }}
            className={`w-full px-4 py-3.5 rounded-2xl bg-gray-100 text-sm text-gray-900 outline-none mb-6 focus:ring-2 transition-all ${
              error && error.includes("CAPTCHA")
                ? "ring-2 ring-red-400 bg-red-50"
                : "focus:bg-violet-50 focus:ring-violet-300"
            }`}
          />

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-violet-200"
          >
            Sign In
          </button>

          <p
            onClick={() => navigate("/register/faculty")}
            className="text-center mt-4 text-violet-700 cursor-pointer text-sm font-medium hover:underline"
          >
            New faculty? Register here
          </p>
        </div>
      </div>
    </div>
  );
}
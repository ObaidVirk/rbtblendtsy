"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import { validateAdminCredentials } from "@/app/actions/auth";
import { useTranslation } from "@/lib/TranslationContext";

interface AuthFormProps {
  type: "login" | "signup";
}

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (isLogin) {
      const result = await validateAdminCredentials(form.email, form.password);
      if (result.success) {
        localStorage.setItem("adminLoggedIn", "true");
        router.push("/admin");
      } else {
        setError("Invalid admin credentials");
        setIsLoading(false);
      }
    } else {
      // Non-admin signup flow placeholder
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  const isLogin = type === "login";

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-sm">RB</span>
        </div>
        <div>
          <span className="font-bold text-finBlue text-xl leading-none">rbtblendtsy</span>
          <span className="text-finPurple text-xl font-bold leading-none">.com</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border border-finGray-100 p-8 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-finBlue mb-2">
          {isLogin ? "Welcome back" : "Create your account"}
        </h1>
        <p className="text-finGray-400 text-sm mb-8">
          {isLogin
            ? "Sign in to your rbtblendtsy platform account"
            : "Start your fintech journey with rbtblendtsy.com"}
        </p>

        {error && (
          <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 mb-2">
            <AlertCircle size={16} className="text-red-500 shrink-0" />
            <p className="text-sm text-red-600 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-finGray-700 mb-1.5">
                {t.signup.name}
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="John Doe"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-finGray-700 mb-1.5">
              {t.login.email}
            </label>
            <input
              type="email"
              className="input-field"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-finGray-700 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Acme Bank Ltd."
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-finGray-700 mb-1.5">
              {isLogin ? t.login.password : t.signup.password}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input-field pr-12"
                placeholder={isLogin ? "Enter your password" : "Create a strong password"}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-finGray-400 hover:text-finGray-600 transition-colors p-1"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-finGray-700 mb-1.5">
                {t.signup.confirmPassword}
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="input-field pr-12"
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-finGray-400 hover:text-finGray-600 transition-colors p-1"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-finGray-300 text-finPurple focus:ring-finPurple"
                />
                <span className="text-sm text-finGray-600">Remember me</span>
              </label>
              <Link
                href="#"
                className="text-sm font-semibold text-finPurple hover:text-finPurple-dark transition-colors"
              >
                {t.login.forgot}
              </Link>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-finPurple text-white font-semibold rounded-xl hover:bg-finPurple-dark transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
          >
            {isLoading && <Loader2 size={18} className="animate-spin" />}
            {isLogin ? t.login.submit : t.signup.submit}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-finGray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link
              href={isLogin ? "/signup" : "/login"}
              className="font-semibold text-finPurple hover:text-finPurple-dark transition-colors"
            >
              {isLogin ? "Sign up for free" : "Sign in"}
            </Link>
          </p>
        </div>

        {isLogin && (
          <div className="mt-6 pt-6 border-t border-finGray-100">
            <div className="text-center text-xs text-finGray-300 mb-4">Or continue with</div>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-finGray-200 rounded-lg hover:bg-finGray-50 text-sm text-finGray-600 font-medium transition-colors">
                <span>🔑</span> SSO Login
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-finGray-200 rounded-lg hover:bg-finGray-50 text-sm text-finGray-600 font-medium transition-colors">
                <span>🏢</span> Enterprise
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="text-center text-xs text-finGray-300 mt-6">
        By continuing, you agree to our{" "}
        <Link href="/about" className="text-finPurple hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/about" className="text-finPurple hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

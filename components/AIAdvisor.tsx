
import React, { useState } from 'react';
import { getEducationAdvice } from '../services/geminiService';
import { AIAdvisorResponse } from '../types';

const AIAdvisor: React.FC = () => {
  const [profile, setProfile] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIAdvisorResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const advice = await getEducationAdvice(profile);
      setResult(advice);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="advisor" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span>Powered by Gemini 3</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">Meet 'Nova' — Your AI Path Finder</h2>
          <p className="text-blue-100/60 text-lg">
            Share your academic interests, grades, or career goals. Nova will analyze your profile and provide instant elite university recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-blue-200 mb-2 uppercase tracking-wide">Tell Nova about yourself</label>
                <textarea
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl p-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-h-[200px] transition-all"
                  placeholder="Example: I am a 12th-grade student with a 3.8 GPA. I love astrophysics and debate. I'm looking for top US universities with strong research programs..."
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading || !profile.trim()}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2 ${
                  loading || !profile.trim() ? 'bg-slate-700 cursor-not-allowed text-slate-400' : 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Consulting Nova...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Generate My Path</span>
                  </>
                )}
              </button>
            </form>
            {error && (
              <p className="mt-4 text-red-400 text-sm bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                {error}
              </p>
            )}
          </div>

          <div className="space-y-6">
            {!result ? (
              <div className="h-full min-h-[400px] border-2 border-dashed border-slate-700 rounded-3xl flex flex-col items-center justify-center text-center p-10 opacity-50">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Awaiting your data</h4>
                <p className="text-slate-400">Your custom path analysis will appear here once you describe your profile.</p>
              </div>
            ) : (
              <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-700">
                <h4 className="text-2xl font-extrabold text-[#001A3D] mb-4">Analysis Results</h4>
                <p className="text-slate-600 mb-8 leading-relaxed italic">
                  "{result.summary}"
                </p>
                
                <div className="space-y-4">
                  {result.recommendations.map((uni, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h5 className="font-bold text-[#001A3D] text-lg">{uni.name}</h5>
                          <p className="text-sm text-slate-500">{uni.location}</p>
                        </div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full">
                          {uni.matchScore}% Match
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-900">
                        {uni.reason}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-xs text-slate-400 italic font-medium">This is AI-generated advice. Consult our human experts for final strategy.</p>
                  <button className="text-blue-600 font-bold text-sm hover:underline">Download PDF</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;

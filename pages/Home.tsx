
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, Code2, GraduationCap, Map, ArrowRight, 
  Terminal, Sparkles, Database, BrainCircuit
} from 'lucide-react';
import { COURSES } from '../constants';
import { Language, ThemeMode } from '../types';

interface HomeProps {
  theme: ThemeMode;
}

const Home: React.FC<HomeProps> = ({ theme }) => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const hindiCourses = COURSES.filter(c => c.language === Language.HINDI);
  const englishCourses = COURSES.filter(c => c.language === Language.ENGLISH).sort((a, b) => a.order - b.order);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-8 md:p-12 lg:p-20 max-w-7xl mx-auto space-y-24"
    >
      {/* Hero Section */}
      <section className="relative text-center md:text-left">
        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#30363d] bg-[#161b22] text-[#58a6ff] text-xs mb-6">
          <Sparkles size={14} />
          <span className="font-bold tracking-widest uppercase">Version 2.0 Released</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-none">
          Deploy Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#d2a8ff]">Data Dreams.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl opacity-60 max-w-3xl mb-10 leading-relaxed font-mono">
          The all-in-one aesthetic terminal for Python and Data Science. 
          Zero fluff. 100% code. Master the stack from foundation to neural networks.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button 
            onClick={() => navigate('/lesson/hindi-beginner-1')}
            className="px-8 py-4 bg-[#58a6ff] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(88,166,255,0.4)] transition-all flex items-center space-x-2 group"
          >
            <Play size={20} fill="currentColor" />
            <span>START CODING</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center space-x-6 text-sm font-mono opacity-50 px-4">
            <div className="flex items-center gap-2"><Database size={16} /> SQL</div>
            <div className="flex items-center gap-2"><Code2 size={16} /> Python</div>
            <div className="flex items-center gap-2"><BrainCircuit size={16} /> ML</div>
          </div>
        </motion.div>
      </section>

      {/* Roadmap Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#58a6ff22] flex items-center justify-center text-[#58a6ff]">
              <Map size={24} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">The Coder's Roadmap</h2>
          </div>
          <p className="opacity-60 text-lg">
            We've structured your learning into two major phases. Begin with Hindi for deep foundations, then scale with English advanced tracks.
          </p>
          <div className="space-y-4 font-mono text-sm">
            <div className="flex items-start gap-4 p-4 rounded-xl border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff55] transition-colors">
              <span className="text-[#58a6ff] font-bold">01</span>
              <div>
                <p className="font-bold text-white">Foundation (Hindi)</p>
                <p className="text-xs opacity-50 italic">Python Basics, SQL, Data Analytics Essentials</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl border border-[#30363d] bg-[#161b22] hover:border-[#d2a8ff55] transition-colors">
              <span className="text-[#d2a8ff] font-bold">02</span>
              <div>
                <p className="font-bold text-white">Advanced Track (English)</p>
                <p className="text-xs opacity-50 italic">Pandas, Numpy, Machine Learning, Projects</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#58a6ff] to-[#d2a8ff] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#0d1117] border border-[#30363d] rounded-2xl p-2 shadow-2xl overflow-hidden aspect-video">
             <div className="h-6 w-full flex items-center px-4 space-x-1.5 border-b border-[#30363d] bg-[#161b22]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
             </div>
             <div className="p-4 font-mono text-[11px] leading-relaxed">
               <div className="text-[#7ee787]">def learn_data_science():</div>
               <div className="pl-4 text-[#58a6ff]">roadmap = [<span className="text-[#ffa657]">"Hindi"</span>, <span className="text-[#ffa657]">"English"</span>]</div>
               <div className="pl-4 text-[#7ee787]">for chapter in roadmap:</div>
               <div className="pl-8 text-[#58a6ff]">watch_video(chapter)</div>
               <div className="pl-8 text-[#58a6ff]">practice_on_jupyter()</div>
               <div className="pl-4 text-[#7ee787]">return <span className="text-[#ffa657]">"Expert"</span></div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Courses Grid */}
      <section className="space-y-12 pb-32">
        <div className="flex items-end justify-between border-b border-[#30363d] pb-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Select Your Module</h2>
            <p className="text-sm opacity-50 font-mono italic">// Click any file to open editor</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {COURSES.map((course, idx) => (
             <motion.div 
               key={course.id}
               variants={itemVariants}
               whileHover={{ y: -8 }}
               onClick={() => navigate(`/lesson/${course.id}`)}
               className="group relative cursor-pointer"
             >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#58a6ff55] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={course.thumbnail} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                      alt={course.title} 
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 rounded text-[9px] font-bold text-[#58a6ff] border border-[#58a6ff55]">
                      {course.language}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-[10px] font-mono opacity-50 mb-1 uppercase tracking-tighter">Lesson {idx + 1}</div>
                    <h3 className="text-lg font-bold group-hover:text-[#58a6ff] transition-colors leading-tight mb-3">
                      {course.title}
                    </h3>
                    <p className="text-xs opacity-50 line-clamp-2 mb-6 font-mono leading-relaxed">
                      {course.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-[#30363d] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Play size={14} className="text-[#58a6ff]" />
                        <span className="text-[11px] font-mono opacity-60">{course.duration}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#58a6ff] group-hover:translate-x-1 transition-transform">EXECUTE &rarr;</span>
                    </div>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

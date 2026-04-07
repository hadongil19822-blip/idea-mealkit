
import React from 'react';
import { Mail, MessageCircle, ScanLine, Phone } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-[#020617] text-white relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6 inline-block">Contact Us</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight break-keep">
                            Ready to Cook <br className="hidden md:block" />
                            <span className="text-blue-500">Something New?</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-lg break-keep">
                            복잡한 아이디어도 괜찮습니다. 저희가 가장 맛있는 솔루션으로 만들어 드립니다.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-5 md:p-6 bg-slate-800/50 rounded-[1.25rem] md:rounded-2xl border border-slate-700/50">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-base md:text-lg mb-0.5 md:mb-1 text-white">Email</h4>
                                    <p className="text-slate-400 text-sm md:text-base break-all">hadongil19822@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-5 md:p-6 bg-slate-800/50 rounded-[1.25rem] md:rounded-2xl border border-slate-700/50">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base md:text-lg mb-0.5 md:mb-1 text-white">Phone</h4>
                                    <p className="text-slate-400 text-sm md:text-base">070-8028-9451</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-slate-100 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center text-center relative overflow-hidden group">
                         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FAE100] to-yellow-500 opacity-80"></div>
                         
                         <div className="mb-5 md:mb-6 relative">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FAE100] rounded-2xl md:rounded-[1.5rem] flex items-center justify-center shadow-[0_0_20px_rgba(250,225,0,0.4)] transform group-hover:rotate-6 transition-transform duration-300">
                                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-[#3C1E1E]" fill="currentColor" strokeWidth={0} />
                            </div>
                         </div>

                         <h3 className="text-2xl md:text-3xl font-black mb-2 md:mb-3 tracking-tight break-keep">
                            <span className="text-yellow-400">카카오톡</span>으로 편하게 연락주세요!
                         </h3>
                         
                         <p className="text-slate-400 text-[15px] md:text-lg mb-6 md:mb-8 leading-relaxed max-w-sm font-medium break-keep">
                            궁금한 점이 있으신가요? 카카오톡 채널로 문의주시면 담당자가 빠르게 답변해 드립니다.
                         </p>

                         {/* QR Code Section */}
                         <div className="hidden md:block mb-6 md:mb-8 p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-[1rem] md:rounded-2xl shadow-md relative group/qr backdrop-blur-md">
                            <img 
                                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://pf.kakao.com/_mxbzgn/friend&color=ffffff&bgcolor=1e293b&margin=0" 
                                alt="KakaoTalk Channel QR" 
                                className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-90 group-hover/qr:opacity-100 transition-opacity rounded-lg md:rounded-xl mix-blend-screen" 
                            />
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-[9px] md:text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1 border border-yellow-200">
                                <ScanLine size={10} />
                                <span>Scan Me</span>
                            </div>
                         </div>

                         <a 
                            href="https://pf.kakao.com/_mxbzgn/friend" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 md:py-5 bg-[#FAE100] text-[#3C1E1E] rounded-2xl font-bold text-lg md:text-xl hover:bg-[#FCE840] transition-all shadow-[0_0_20px_rgba(250,225,0,0.3)] hover:shadow-[0_0_30px_rgba(250,225,0,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2 md:gap-3"
                         >
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 opacity-80" fill="currentColor" />
                            카카오톡 상담하기
                         </a>
                         
                         <p className="mt-6 text-xs text-slate-500 font-medium bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                            평일 09:00 - 18:00 (답변 평균 10분 이내)
                         </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

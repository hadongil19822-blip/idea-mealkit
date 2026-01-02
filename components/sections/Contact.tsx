
import React from 'react';
import { Mail, MessageCircle, ScanLine, Phone } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-slate-900 text-white relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 inline-block">Contact Us</span>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            Ready to Cook <br />
                            <span className="text-blue-500">Something New?</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
                            복잡한 아이디어도 괜찮습니다. 저희가 가장 맛있는 솔루션으로 만들어 드립니다.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email</h4>
                                    <p className="text-slate-400">hadongil19822@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                                    <p className="text-slate-400">070-8028-9451</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-slate-900 shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
                         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                         
                         <div className="mb-6 relative">
                            <div className="w-20 h-20 bg-[#FAE100] rounded-[1.5rem] flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                                <MessageCircle size={40} className="text-[#3C1E1E]" fill="currentColor" strokeWidth={0} />
                            </div>
                         </div>

                         <h3 className="text-3xl font-black mb-3 tracking-tight">
                            <span className="text-yellow-500">카카오톡</span>으로<br/>
                            편하게 연락주세요!
                         </h3>
                         
                         <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-sm font-medium">
                            궁금한 점이 있으신가요?<br/>
                            카카오톡 채널로 문의주시면<br/>
                            담당자가 빠르게 답변해 드립니다.
                         </p>

                         {/* QR Code Section */}
                         <div className="mb-8 p-3 bg-white rounded-2xl border border-slate-100 shadow-md relative group/qr">
                            <img 
                                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://pf.kakao.com/_mxbzgn/friend" 
                                alt="KakaoTalk Channel QR" 
                                className="w-32 h-32 object-contain opacity-90 group-hover/qr:opacity-100 transition-opacity" 
                            />
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1.5">
                                <ScanLine size={10} />
                                <span>Scan Me</span>
                            </div>
                         </div>

                         <a 
                            href="https://pf.kakao.com/_mxbzgn/friend" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-5 bg-[#FAE100] text-[#3C1E1E] rounded-2xl font-bold text-xl hover:bg-[#FCE840] transition-all shadow-xl shadow-yellow-200 hover:shadow-yellow-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                         >
                            <MessageCircle size={24} fill="currentColor" className="opacity-80" />
                            카카오톡 상담하기
                         </a>
                         
                         <p className="mt-6 text-xs text-slate-400 font-medium bg-slate-50 px-4 py-2 rounded-full">
                            평일 09:00 - 18:00 (답변 평균 10분 이내)
                         </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

import React, { useRef } from 'react';
import { Check, Link, Handshake, Code2, MonitorSmartphone, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export const ProposalPage: React.FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    const handleDownloadImage = async () => {
        if (!pageRef.current) return;
        try {
            const canvas = await html2canvas(pageRef.current, {
                scale: 2, // High resolution
                useCORS: true,
                backgroundColor: '#ffffff'
            });
            const image = canvas.toDataURL('image/png', 1.0);
            const link = document.createElement('a');
            link.download = 'idea-mealkit_proposal.png';
            link.href = image;
            link.click();
        } catch (error) {
            console.error('Failed to download image:', error);
            alert('이미지 저장 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white pb-20">
            {/* Floating Download Button (Not included in the image) */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadImage}
                className="fixed bottom-6 right-6 z-50 bg-slate-900 hover:bg-black text-white p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 font-bold group border-2 border-white/10"
            >
                <Download size={22} className="group-hover:-translate-y-1 transition-transform" />
                <span className="hidden md:block pr-2">이미지로 저장</span>
            </motion.button>

            {/* Target Container for Image Export */}
            <div ref={pageRef} className="bg-white max-w-[1200px] mx-auto overflow-hidden">

            {/* SECTION 1: MAIN POINT */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="max-w-5xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32"
            >
                {/* Logo */}
                <div className="mb-16">
                    <img src="/idea_mealkit_logo.png" alt="아이디어밀키트 로고" className="h-10 md:h-12 object-contain" />
                </div>

                <p className="text-blue-600 font-bold text-sm tracking-wider mb-6">MAIN POINT</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.4] mb-12 tracking-tight">
                    대표님이 평소 구상하셨던<br />
                    <span className="text-blue-600 relative inline-block z-10">
                        아이디어가 있지 않으신가요?
                        <span className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-blue-100 -z-10"></span>
                    </span>
                </h1>
                
                <div className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-16 space-y-8">
                    <p className="font-medium text-slate-700">
                        "이런 플랫폼이 있으면 팬들이 참 좋아할 텐데..."<br />
                        "이 아이디어를 앱으로 만들면 대박이 날 텐데..."
                    </p>
                    <p>
                        영상을 올릴 때마다 스쳐 지나갔던 그 생각들이,<br />
                        <span className="font-bold text-slate-900">막대한 개발 비용</span>과 <span className="font-bold text-slate-900">구현의 막막함</span> 때문에<br />
                        단순한 '상상'에만 머무르는 현실의 장벽을 허물어 드리고 싶습니다.
                    </p>
                    <p>
                        저는 외주 개발사가 아닙니다. 대표님의 아이디어에<br />
                        <span className="text-blue-600 font-bold italic relative inline-block z-10">
                            제 모든 기술력과 자본을 직접 투자하고 싶은
                            <span className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-blue-100 -z-10"></span>
                        </span> 테크 파트너입니다.
                    </p>
                </div>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">아이디어만 있으면,<br />초기 비용 부담이 없습니다.</h3>
                        <p className="text-slate-500 leading-relaxed">
                            수천만 원이 드는 초기 IT 서비스 개발 비용을 제가 전액 투자(재능 기부)합니다. 대표님은 온전히 비즈니스 기획과 채널 확장에만 집중하실 수 있습니다.
                        </p>
                    </motion.div>
                    <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">파트너십 기반,<br />수익 쉐어 파트너십</h3>
                        <p className="text-slate-500 leading-relaxed">
                            서비스가 성공해야 저도 수익을 얻는 구조입니다. 그렇기에 외주 개발처럼 대충 만들고 끝내지 않습니다. 누구보다 절실하게, 최상의 퀄리티로 완성합니다.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* SECTION 2: WHY PARTNERSHIP (Dark Section) */}
            <section className="bg-slate-950 text-white py-24 md:py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950"></div>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="max-w-5xl mx-auto relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.4] mb-16 tracking-tight">
                        제가 대표님께<br />
                        <span className="text-blue-500">먼저 파트너십을 제안하는</span> 이유입니다.
                    </h2>

                    <div className="space-y-12 max-w-4xl">
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 md:gap-8 group">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-900/40 flex items-center justify-center border border-blue-800/50 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                                <Check className="text-blue-400 group-hover:text-white transition-colors duration-300" size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">압도적인 트래픽과 팬덤을 보유하고 계십니다</h3>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    아무리 잘 만든 IT 서비스도 초기 마케팅 비용과 트래픽 확보가 가장 어렵습니다. 대표님의 채널은 이미 훌륭한 마케팅 채널입니다. 여기에 제대로 된 IT 서비스가 결합된다면 단기간에 폭발적인 시너지를 낼 수 있습니다.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 md:gap-8 group">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-900/40 flex items-center justify-center border border-blue-800/50 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                                <Link className="text-blue-400 group-hover:text-white transition-colors duration-300" size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">안정적인 추가 수익 파이프라인 구축이 가능합니다</h3>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    유튜브 조회수나 광고 단가에만 의존하는 수익 구조를 넘어, 구독자를 타겟으로 한 커머스, 커뮤니티, 구독형 서비스 등 플랫폼 비즈니스를 통해 지속적이고 독립적인 새로운 수익 모델을 만들어 드릴 수 있습니다.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 3: SUSTAINABILITY */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="max-w-5xl mx-auto px-6 py-24 md:py-32"
            >
                <p className="text-blue-600 font-bold text-sm tracking-wider mb-6">SUSTAINABILITY</p>
                <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.4] flex-1 tracking-tight">
                        단순 앱 제작이<br />
                        아닌,<br />
                        <span className="text-blue-600 relative inline-block z-10">
                            지속 가능한 시스템을
                            <span className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-blue-100 -z-10"></span>
                        </span><br />
                        소유하십시오.
                    </h2>
                    <div className="flex-1 lg:pl-10">
                        <div className="border-l-4 border-blue-600 pl-6 md:pl-8 py-2">
                            <p className="text-slate-600 leading-relaxed text-xl font-medium mb-3">
                                성공적인 IT 비즈니스는<br className="hidden lg:block" /> <span className="text-slate-900 font-bold">한 번의 개발로 끝나지 않습니다.</span>
                            </p>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                지속적인 기능 업데이트와 안정적인 서버 운영이 뒷받침되어야 합니다. 런칭은 끝이 아닌 비즈니스의 진짜 시작입니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row gap-8 md:items-center hover:bg-slate-100 transition-colors duration-300">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 flex-shrink-0">
                            <Code2 className="text-blue-600" size={32} />
                        </div>
                        <div>
                            <p className="text-blue-600 font-bold text-xs tracking-wider mb-2">FULL-STACK DEVELOPMENT</p>
                            <h3 className="text-2xl font-bold mb-3">내부에 IT팀을 둔 것과 같은 전담 지원</h3>
                            <p className="text-slate-500 text-lg">기획, 디자인, 프론트엔드, 백엔드 서버 구축부터 앱스토어 심사 및 등록까지 서비스 런칭에 필요한 A to Z 모든 과정을 책임지고 진행합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row gap-8 md:items-center hover:bg-slate-100 transition-colors duration-300">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 flex-shrink-0">
                            <Handshake className="text-blue-600" size={32} />
                        </div>
                        <div>
                            <p className="text-blue-600 font-bold text-xs tracking-wider mb-2">LONG-TERM PARTNERSHIP</p>
                            <h3 className="text-2xl font-bold mb-3">수익 쉐어 기반의 장기적인 관리 파트너십</h3>
                            <p className="text-slate-500 text-lg">외주 개발처럼 만들고 끝나는 관계가 아닙니다. 서비스 오픈 이후의 유지보수, 트래픽 폭주 대비 서버 증설, 기능 업데이트까지 책임집니다.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="bg-slate-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row gap-8 md:items-center group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 blur-[80px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-700"></div>
                        <div className="w-16 h-16 bg-blue-900/50 rounded-2xl flex items-center justify-center border border-blue-800/50 flex-shrink-0 relative z-10">
                            <MonitorSmartphone className="text-blue-400" size={32} />
                        </div>
                        <div className="relative z-10">
                            <p className="text-blue-400 font-bold text-xs tracking-wider mb-2">PREMIUM EXPERIENCE</p>
                            <h3 className="text-2xl font-bold mb-3">프리미엄 IT 전담팀을 소유하는 경험</h3>
                            <p className="text-slate-400 text-lg">외주에 맡기고 퀄리티와 일정 때문에 불안해하실 필요 없습니다. 언제든 소통 가능하고 믿고 맡길 수 있는 확실한 기술 파트너가 되어 드리겠습니다.</p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* SECTION 4: ADDED MISSING SECTION - TECHNOLOGY PARTNER */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="max-w-5xl mx-auto px-6 py-24 md:py-32"
            >
                <p className="text-blue-600 font-bold text-sm tracking-wider mb-4">TECHNOLOGY PARTNER</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight">
                    안녕하세요, <span className="text-blue-600">아이디어밀키트 대표</span>입니다.
                </h2>
                
                <div className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed font-medium space-y-6">
                    <p>
                        현재 종로여성인력개발센터에서 AI 전임 강사로 활동하며, 수많은 사람들의 반짝이는 아이디어가 기술을 만나 현실이 되는 가슴 벅찬 순간들을 함께하고 있습니다.
                    </p>
                    <p>
                        저에게 개발이란 단순한 '코딩 작업'이 아닙니다.<br className="hidden md:block" />
                        머릿속에만 머물러 있던 <span className="text-slate-900 font-bold">대표님의 상상에 생명력을 불어넣어, 세상에 없던 비즈니스로 실현시키는 전략적 테크 파트너</span>가 되는 것. 그것이 제가 이 일을 사랑하는 이유입니다.
                    </p>
                </div>

                <motion.div 
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#f8fbff] rounded-3xl p-8 md:p-12 border border-blue-100 mb-12 shadow-sm hover:shadow-xl hover:shadow-blue-900/5"
                >
                    <p className="text-blue-600 font-bold text-xs tracking-wider mb-4">PROFESSIONAL TRUST</p>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                        실사용자 400만 명의 <span className="text-blue-600">'아파트너'</span> 앱 프로젝트 참여 중
                    </h3>
                    <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                        <p>
                            현재 아파트너 앱 내에 새롭게 탑재될 <span className="font-bold text-slate-900">신규 게임을 전담 개발 중이며, 다가오는 5~6월 공식 런칭</span>을 앞두고 있습니다.
                        </p>
                        <p>
                            단순한 외주 개발이 아닙니다. 이 대규모 프로젝트 역시 제가 직접 기술력을 투자하고 수익을 나누는 <span className="font-bold text-slate-900">동일한 리스크 쉐어 파트너십 구조</span>로 진행되고 있습니다. 저는 비즈니스 성공에 제 운명을 함께 거는 파트너입니다.
                        </p>
                    </div>
                </motion.div>

                <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
                    그동안 수많은 크리에이터 분들이 뛰어난 아이디어를 가지고도 '기술의 장벽'에 부딪혀 시작조차 하지 못하는 안타까운 현실을 지켜보았습니다.
                </p>

                <div className="border-l-4 border-blue-600 pl-6 md:pl-10 py-2">
                    <p className="text-xl md:text-2xl font-bold text-slate-900 italic leading-[1.6]">
                        "이미 대표님의 머릿속에 비즈니스의 밑그림은 모두 그려져 있습니다.<br className="hidden md:block" /> 
                        저는 그 완벽한 밑그림에 'IT 기술'이라는 강력한 엔진을 달아드리는 사람입니다.<br className="hidden md:block" /> 
                        기술의 장벽 때문에 대표님의 상상이 멈추는 일은 결코 없게 하겠습니다."
                    </p>
                </div>
            </motion.section>

            {/* SECTION 4.5: FAQ (Anticipating Objections) */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="max-w-4xl mx-auto px-6 py-16 bg-white border border-slate-100 shadow-xl shadow-slate-900/5 rounded-[40px] mb-24 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 blur-[80px] rounded-full -z-10"></div>
                
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-bold text-sm tracking-wider mb-2">Q&A</p>
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">자주 묻는 질문</h2>
                </div>
                <div className="space-y-6">
                    <div className="p-2 md:p-4">
                        <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                            <span className="text-blue-600 font-black">Q.</span> 
                            <span>아이디어 유출이나 도용의 위험은 없나요?</span>
                        </h4>
                        <p className="text-slate-600 leading-relaxed pl-8 md:pl-9 text-lg">
                            저는 단순한 외주 개발자가 아닌 '공동의 목표'를 향해 달리는 파트너입니다. 따라서 대표님의 아이디어가 유출되는 것은 곧 저의 비즈니스 손실과도 같습니다.<br className="hidden md:block" />
                            물론 대표님이 원하신다면, 본격적인 논의 전 <span className="font-bold text-slate-900">상호 비밀유지계약(NDA)</span>을 체결하는 것도 언제든 환영합니다. 대표님의 독창적인 기획안을 철저히 보호함과 동시에, 제가 제공하는 기술적 노하우 역시 상호 존중하는 가장 안전한 환경에서 논의를 시작하실 수 있습니다.
                        </p>
                    </div>
                    <div className="w-full h-px bg-slate-100 my-4"></div>
                    <div className="p-2 md:p-4">
                        <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                            <span className="text-blue-600 font-black">Q.</span> 
                            <span>'수익 쉐어'는 어떤 비율로 이루어지나요?</span>
                        </h4>
                        <p className="text-slate-600 leading-relaxed pl-8 md:pl-9 text-lg">
                            정해진 고정 비율은 없습니다. 아이디어의 규모, 개발 난이도, 대표님의 마케팅 기여도 등을 종합적으로 고려하여 <span className="font-bold text-slate-900">가장 합리적이고 상호 만족할 수 있는 비율</span>로 개별 협의합니다. 수천만 원의 외주비를 절감한 만큼 비즈니스 런칭과 마케팅에 온전히 집중하실 수 있도록 돕습니다.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* SECTION 5: PROCESS & CONTACT */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="max-w-4xl mx-auto px-6 py-12"
            >
                <div className="rounded-[40px] border-[3px] border-slate-900 p-8 md:p-16 text-center shadow-2xl shadow-slate-900/5">
                    <p className="text-blue-600 font-bold text-sm tracking-wider mb-6">STEP-BY-STEP PROCESS</p>
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.3] mb-20 tracking-tight">
                        대표님의 상상이<br />현실이 되기까지 3단계
                    </h2>

                    <div className="space-y-16 text-left max-w-xl mx-auto mb-24 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[23px] md:left-[27px] top-10 bottom-10 w-1 bg-slate-100 rounded-full"></div>

                        <motion.div variants={fadeUp} className="flex gap-6 md:gap-10 relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-extrabold text-xl md:text-2xl flex-shrink-0 shadow-lg">
                                1
                            </div>
                            <div className="pt-2 md:pt-3">
                                <h4 className="text-xl font-bold mb-3">기획 및 디자인 (Plan & Design)</h4>
                                <p className="text-slate-500 text-lg leading-relaxed">아이디어를 구체화하고 수익 모델을 설계합니다. 사용하기 편안한 UI/UX 디자인을 완성하여 확인시켜 드립니다.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex gap-6 md:gap-10 relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-slate-200 text-slate-400 rounded-2xl flex items-center justify-center font-extrabold text-xl md:text-2xl flex-shrink-0">
                                2
                            </div>
                            <div className="pt-2 md:pt-3">
                                <h4 className="text-xl font-bold mb-3">앱/웹 서비스 개발 (Development)</h4>
                                <p className="text-slate-500 text-lg leading-relaxed">최신 기술 스택을 활용하여 빠르고 안정적인 서비스를 개발합니다. 중간 단계마다 진행 상황을 투명하게 공유합니다.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex gap-6 md:gap-10 relative z-10">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-slate-200 text-slate-400 rounded-2xl flex items-center justify-center font-extrabold text-xl md:text-2xl flex-shrink-0">
                                3
                            </div>
                            <div className="pt-2 md:pt-3">
                                <h4 className="text-xl font-bold mb-3">런칭 및 운영 (Launch & Operation)</h4>
                                <p className="text-slate-500 text-lg leading-relaxed">앱스토어 등록 심사를 통과하고 공식 런칭합니다. 이후 발생하는 버그 수정, 유지보수, 트래픽 관리를 책임집니다.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="border-t-2 border-slate-100 pt-16">
                        {/* URGENCY / SCARCITY TRIGGER */}
                        <div className="mb-10 bg-slate-50 border border-slate-100 p-8 rounded-3xl">
                            <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold text-sm tracking-wide">🔥 한정 파트너십 안내</span>
                            <p className="text-slate-900 font-bold text-lg md:text-xl mt-5 leading-relaxed">
                                모든 프로젝트의 퀄리티와 기존 파트너 집중 관리를 최우선으로 하기 위해,<br className="hidden md:block" />
                                <span className="text-blue-600 border-b-2 border-blue-200 pb-1">이번 상반기 신규 파트너십은 단 1팀만 추가로 모시고 있습니다.</span>
                            </p>
                        </div>

                        <p className="text-slate-400 font-bold text-xs tracking-widest mb-6">CONTACT & BUSINESS INQUIRY</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <motion.a 
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href="mailto:hadongil19822@gmail.com"
                                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/30 w-full md:w-auto"
                            >
                                hadongil19822@gmail.com
                            </motion.a>
                            
                            <motion.a 
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href="tel:010-7777-0879"
                                className="inline-flex items-center justify-center bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-slate-800/30 w-full md:w-auto"
                            >
                                010-7777-0879
                            </motion.a>
                        </div>
                        <p className="mt-8 text-sm md:text-base text-slate-500">
                            궁금한 점이 있으시거나 더 자세한 논의가 필요하시다면 메일이나 전화로 언제든 편하게 연락 부탁드립니다.
                        </p>

                    </div>
                </div>
            </motion.section>
            </div>
        </div>
    );
};

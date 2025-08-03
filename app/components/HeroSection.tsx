'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-green-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Rahardian Dewa Bimantara</h1>
						<p className="text-gray-400 mb-2">Backend Geeks</p>
						<p className="text-green-500">$ help -d short_bio</p>
						<ul className="list-disc list-inside text-gray-400">
							<li>Data and Tech Enthusiast</li>
							<li>Fast Learner</li>
							<li>Geeks about something new</li>
							<li>Currently Exploring and Learning <strong className="text-green-500">Web3, Blockchain and Smart Contract</strong></li>
						</ul>
						<p className="text-green-500">$ skills</p>
						<div className="flex flex-wrap gap-2 mt-2 mb-2">
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">PHP</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Go</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Python</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Node.js</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">AWS</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Docker</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">MySQL</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">PostgreSQL</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Redis</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

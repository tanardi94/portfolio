'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Experiences
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'IDN -  Senior Software Engineer',
							link: 'https://idn.media',
							description: 'Aug 2022 - Present',
							details: [
								'APIs Development',
								'CMS Development',
								'AI generated Articles Feature',
								'AI generated Article Summary Feature',
								'Migrating stacks to integrate Amazon Web Services',
								'Maintain donation service for streamers - Saweria',
							],
							tech: ['Go', 'Docker', 'AWS', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Redis', 'Python', 'Flask'],
						},
						{
							title: 'Apple Developer Academy @ UC - iOS Engineer Intern',
							link: 'https://appledeveloperacademy.com',
							description: 'Mar 2023 - Dec 2023',
							details: [
								'Instant Travel Itinerary App',
								'AR Based Item Counter App',
								'Mushroom Smart Farming App',
								'Tax and Salary Adjustment App',
							],
							tech: ['Swift', 'Xcode'],
						},
						{
							title: 'Jagel - Senior Software Engineer',
							link: 'https://jagel.id',
							description: 'Sep 2019 - Aug 2022',
							details: [
								'Real-time Chat and Navigation',
								'Payment Gateway Integration',
								'Voice and Video Call In-App Feature',
								'APIs Development',
								'CMS Development',
							],
							tech: ['PHP', 'Laravel', 'MySQL', 'MongoDB', 'Redis', 'Node.js', 'Express', 'Socket.io'],
						},
						{
							title: 'iFoundries - Software Engineer',
							link: 'https://ifoundries.com',
							description: 'Jan 2019 - Jul 2019',
							details: [
								'Website Development',
								'Email Templates Development'
							],
							tech: ['PHP', 'MySQL'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<a href={project.link}><h3 className="text-2xl font-bold mb-4">{project.title}</h3></a>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Job Responsibilities:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

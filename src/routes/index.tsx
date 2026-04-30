import { usePostHog } from "@posthog/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import { useEffect } from "react";

import SkillCard from "#/components/SkillCard";
import { dummySkills } from "#/lib/dummySkills";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const posthog = usePostHog();

	useEffect(() => {
		posthog.capture("homepage_viewed");
	}, [posthog]);

	const handleBrowseRegistry = () => {
		posthog.capture("browse_registry_clicked");
	};

	const handlePublishSkill = () => {
		posthog.capture("publish_skill_clicked");
	};

	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						The Registry for <br />{" "}
						<span className="text-gradient">Agentic Intelligence</span>
					</h1>
					<p>
						A high performance registry for agentic agents built with TanStack
						Router, React, and TypeScript. Skild provides a platform for
						developers to share, discover, and collaborate on agentic agents,
						fostering innovation and growth in the field of artificial
						intelligence.
					</p>
				</div>
				<div className="actions">
					<Link
						to="/skills"
						className="btn-primary"
						onClick={handleBrowseRegistry}
					>
						<Terminal size={18} />
						<span>Browse Registry</span>
					</Link>
					<Link
						to="/skills/new"
						className="btn-secondary"
						onClick={handlePublishSkill}
					>
						<Terminal size={18} />
						<span>Publish Skills</span>
					</Link>
				</div>
			</section>
			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created <span className="text-gradient">Skills</span>
					</h2>
					<p>
						{" "}
						Latest Skills Laoded from database in descending creation order
					</p>
				</div>
				<div>
					{dummySkills.length > 0 ? (
						<div className="skills-grid">
							{dummySkills.map((skill) => (
								<SkillCard key={skill.id} {...skill} />
							))}
						</div>
					) : (
						<p>No skills have been created yet.</p>
					)}
				</div>
			</section>
		</div>
	);
}

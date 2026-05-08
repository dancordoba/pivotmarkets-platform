CREATE TABLE `killSwitchLog` (
	`id` int AUTO_INCREMENT NOT NULL,
	`partnerId` int NOT NULL,
	`action` enum('revoked','restored','suspended','reactivated') NOT NULL,
	`reason` text,
	`triggeredBy` int,
	`slmKeyRevoked` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `killSwitchLog_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `missions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`tier` enum('tier1','tier2','tier3') NOT NULL,
	`points` int NOT NULL,
	`category` enum('directory','social','content') NOT NULL,
	`instructions` text NOT NULL,
	`masterclassContent` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `missions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `partnerMissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`partnerId` int NOT NULL,
	`missionId` int NOT NULL,
	`status` enum('pending','submitted','verified','claimed') NOT NULL DEFAULT 'pending',
	`submissionUrl` varchar(2048),
	`verificationNotes` text,
	`pointsClaimed` int NOT NULL DEFAULT 0,
	`submittedAt` timestamp,
	`verifiedAt` timestamp,
	`claimedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `partnerMissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `partnerRewards` (
	`id` int AUTO_INCREMENT NOT NULL,
	`partnerId` int NOT NULL,
	`rewardTierId` int NOT NULL,
	`unlockedAt` timestamp NOT NULL DEFAULT (now()),
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `partnerRewards_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `partners` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`organizationName` varchar(255) NOT NULL,
	`organizationType` enum('chamber','library','school','nonprofit') NOT NULL,
	`city` varchar(255) NOT NULL,
	`state` varchar(2) NOT NULL,
	`contactEmail` varchar(320) NOT NULL,
	`contactPhone` varchar(20),
	`websiteUrl` varchar(2048),
	`totalPoints` int NOT NULL DEFAULT 0,
	`verificationStatus` int NOT NULL DEFAULT 0,
	`complianceStatus` enum('compliant','non-compliant','suspended') NOT NULL DEFAULT 'compliant',
	`slmApiKey` varchar(255),
	`slmActive` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `partners_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rewardTiers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` enum('bronze','silver','gold','platinum') NOT NULL,
	`pointsRequired` int NOT NULL,
	`reward` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`unlocksFeature` varchar(255) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `rewardTiers_id` PRIMARY KEY(`id`),
	CONSTRAINT `rewardTiers_name_unique` UNIQUE(`name`)
);

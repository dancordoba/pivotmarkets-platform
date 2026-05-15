CREATE TABLE `intakeRecords` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contactName` varchar(255),
	`contactEmail` varchar(320),
	`orgName` varchar(255),
	`orgLocation` varchar(255),
	`entityType` varchar(120),
	`projectGoal` text,
	`consentToContact` boolean NOT NULL DEFAULT false,
	`fullPayload` text NOT NULL,
	`responseState` enum('accepted','queued','needs_more_information','duplicate_or_existing_record','rejected_invalid_payload','error') NOT NULL DEFAULT 'queued',
	`grantMatchFlagged` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `intakeRecords_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `staffNotes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`intakeRecordId` int NOT NULL,
	`staffUserId` int NOT NULL,
	`previousState` enum('accepted','queued','needs_more_information','duplicate_or_existing_record','rejected_invalid_payload','error') NOT NULL,
	`newState` enum('accepted','queued','needs_more_information','duplicate_or_existing_record','rejected_invalid_payload','error') NOT NULL,
	`note` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `staffNotes_id` PRIMARY KEY(`id`)
);

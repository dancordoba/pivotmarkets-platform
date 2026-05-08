CREATE TABLE `grantLeads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`city` enum('nappanee','jasper','warsaw') NOT NULL,
	`industry` enum('artisan','furniture','medical','precision','manufacturing') NOT NULL,
	`companyName` varchar(255),
	`grantInterest` varchar(500),
	`status` enum('new','contacted','qualified','converted') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `grantLeads_id` PRIMARY KEY(`id`)
);

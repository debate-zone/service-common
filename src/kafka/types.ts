type baseKafkaMessage = {
    producerUserId: string;
    producerFullName: string;
    consumerUserId: string;
    consumerEmail?: string;
};

export type InvitedUserToDebate = baseKafkaMessage & {
    debateZoneId: string;
    debateZoneTitle: string;
    debateZoneShortDescription: string;
    consumerRole: string;
};

export type JoinedToDebate = baseKafkaMessage & {
    debateZoneId: string;
    debateZoneTitle: string;
    debateZoneShortDescription: string;
};

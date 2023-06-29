import { ParticipantStatus } from '../../../../common-library/src/debateZone/types';

export type BaseKafkaMessage = {
    producerUserId: string;
    producerFullName: string;
    consumerUserId: string;
    consumerFullName?: string;
    consumerEmail?: string;
};

export type InvitedUserToDebate = BaseKafkaMessage & {
    debateZoneId: string;
    debateZoneTitle: string;
    debateZoneImageUrl?: string;
    debateZoneShortDescription: string;
    consumerRole: string;
};

export type JoinedToDebate = BaseKafkaMessage & {
    debateZoneId: string;
    debateZoneTitle: string;
    debateZoneShortDescription: string;
    debateZoneParticipantStatus?: ParticipantStatus;
    debateZoneParticipantStatusLabel?: string;
};

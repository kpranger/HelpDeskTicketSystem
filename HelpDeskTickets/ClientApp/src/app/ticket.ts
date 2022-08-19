export interface Ticket {
    ticketId:          number;
    title:             string;
    details:           string;
    status:            string;
    submittedUserId:   number;
    submittedDate:     Date;
    favoritedUserId:   null;
    resolvedUserId:    number | null;
    resolutionDetails: null | string;
    resolvedDate:      null | Date;
    category:          string;
}

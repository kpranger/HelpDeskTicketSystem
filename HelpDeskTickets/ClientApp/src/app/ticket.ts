export interface Ticket {
    ticketId:          number;
    title:             string;
    details:           string;
    status:            string;
    submittedUserId:   number;
    submittedDate:     string;
    favoritedUserId:   null;
    resolvedUserId:    number | null;
    resolutionDetails: null | string;
    resolvedDate:      null | string;
    category:          string;
}

export interface User {
	"idAggregatorData": number,
    "agentId": string,
    "agentName": string,
    "branchAgentId" :string,
    "aggregatorType": string,
    "eMailId": string,
    "authEKey":string,
    "mobileNumber": string,
    "contactPerson": string,
    "principalAgentId":string,
    "aggregatorDataId": number,
    "aggregatorDetails": string,
    "tabName": [
        Tabs
    ],
    "isUser": string,
    "customerDataIdCustomerData": number;
    "token":string
}


export interface Tabs {
    toLowerCase(): unknown
	"tabName" : string
}
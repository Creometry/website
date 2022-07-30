package models

type PaymeeResponse struct {
	Status  bool               `json:"status"`
	Message string             `json:"message"`
	Code    int                `json:"code"`
	Data    PaymeeResponseData `json:"data"`
}

type PaymeeResponseData struct {
	PaymentStatus bool    `json:"payment_status"`
	Token         string  `json:"token"`
	Amount        float32 `json:"amount"`
	TransactionId float32 `json:"transaction_id"`
	BuyerId       float32 `json:"buyer_id"`
}

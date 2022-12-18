export interface StoreProptypes {
    isLoading: boolean,
    toastMessage: string | null,
    isLoggedIn: boolean,
    user: {
        'data': [
            {
                'id': number,
                'type': number,
                'name': string,
                'email': string,
                'phone': string,
                'media': string,
            }
        ]
    } | null,
    cartItems: number,
    wishlistItems: number,
    couponCode: null | {
        id: 'string'
    }[],
    currency: string | null,
    currencySymbol: string | null,
    languageCode: string | null,
    language: string | null,
    csrf: string | null,
    darkMode: boolean
}

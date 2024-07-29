// Food shown on our website
const Inventory = {
    foodProducts: [
        {
            id: 1,
            name: 'Organic Apples',
            type: 'Snack',
            price: 2.99,
            image: 'https://t3.ftcdn.net/jpg/00/50/50/70/360_F_50507014_BiL29pNtSj2GNQIsRLXJMu3UBwJyNpiP.jpg',
            special: false,
            discount: 0,
        },
        {
            id: 2,
            name: 'Organic Bananas',
            type: 'Snack',
            price: 1.99,
            image: 'https://t3.ftcdn.net/jpg/01/74/93/80/360_F_174938002_zvgqpU18283OpwpHCA1hrfItZ76sMuMB.jpg',
            special: false,
            discount: 0,
        },
        {
            id: 3,
            name: 'Organic Carrots',
            type: 'Vegetable',
            price: 3.49,
            image: 'https://t4.ftcdn.net/jpg/02/06/86/67/360_F_206866740_8k84uz3nnixk6iPI5osM3qNdPDuAcNfa.jpg',
            special: false,
            discount: 0,
        },
        {
            id: 4,
            name: 'Organic Spinach',
            type: 'Vegetable',
            price: 2.79,
            image: 'https://t3.ftcdn.net/jpg/02/32/37/90/360_F_232379006_tKm2eDwZJ2RQ8bq6AGlAjPa6FZy1GmN0.jpg',
            special: false,
            discount: 0,
        },
        {
            id: 5,
            name: 'Organic Tomatoes',
            type: 'Vegetable',
            price: 4.99,
            image: 'https://t4.ftcdn.net/jpg/03/27/96/23/360_F_327962332_6mb5jQLnTOjhYeXML7v45Hc5eED2GYOD.jpg',
            special: false,
            discount: 0,
        },
        {
            id: 6,
            name: 'Organic Kale',
            type: 'Vegetable',
            price: 3.99,
            image: 'https://t3.ftcdn.net/jpg/01/48/84/30/360_F_148843099_jyit93V01FMRgPXoFYxGt6wEm4nrV2B5.jpg',
            special: false,
            discount: 0,
        },
        {
            id: 16,
            name: 'Organic Potatoes',
            type: 'Vegetable',
            price: 3.49,
            image: 'https://t4.ftcdn.net/jpg/05/62/79/17/360_F_562791794_7bmR0kkph60BFFakdAEP0IDKMRyMECPQ.jpg',
            special: false,
            discount: 0,
        },
        {
            id: 7,
            name: 'Organic Strawberries',
            type: 'Snack',
            price: 5.49,
            image: 'https://t3.ftcdn.net/jpg/01/90/27/96/360_F_190279606_Pcge6K49YBMPiI26EEjDKxo8eVbrqYh6.jpg',
            special: true,
            discount: 50,
        },
        {
            id: 8,
            name: 'Organic Blueberries',
            type: 'Snack',
            price: 6.99,
            image: 'https://t4.ftcdn.net/jpg/02/97/35/93/360_F_297359303_TcVumdikGci1F7uhYEPnhfOe8FUt4JnO.jpg',
            special: true,
            discount: 50,
        },
        {
            id: 9,
            name: 'Organic Chicken Breast',
            type: 'Main',
            price: 8.99,
            image: 'https://as2.ftcdn.net/v2/jpg/02/21/24/65/1000_F_221246591_UwwIHJEClXHfZU9RAUnGunMnta3yBwKV.jpg',
            special: false,
            discount: 10,
        },
        {
            id: 10,
            name: 'Organic Beef Steak',
            type: 'Main',
            price: 9.49,
            image: 'https://t4.ftcdn.net/jpg/03/99/38/69/360_F_399386900_M96GZNA1F05OzjCyiz2ZL9qfFfcpkpIw.jpg',
            special: false,
            discount: 10,
        },
        {
            id: 11,
            name: 'Organic Tofu',
            type: 'Main',
            price: 10.49,
            image: 'https://t4.ftcdn.net/jpg/01/66/35/87/360_F_166358770_mr8NzpEbB1EmOqqT3uRn9vsp5NN8ZirC.jpg',
            special: false,
            discount: 10,
        },
        {
            id: 12,
            name: 'Organic Lamb',
            type: 'Main',
            price: 11.49,
            image: 'https://t4.ftcdn.net/jpg/00/58/56/05/360_F_58560573_epYlI2Aa9kHOIMas5qQl6ZlmBR4iyk2S.jpg',
            special: false,
            discount: 10,
        },
        {
            id: 13,
            name: 'Organic Milk',
            type: 'Drink',
            price: 6.49,
            image: 'https://t4.ftcdn.net/jpg/00/71/99/59/360_F_71995983_LYUmVshsYR6EMvPCaC9iEemBIvYF1U4D.jpg',
            special: true,
            discount: 20,
        },
        {
            id: 14,
            name: 'Organic Apple Juice',
            type: 'Drink',
            price: 5.49,
            image: 'https://t3.ftcdn.net/jpg/03/07/37/78/360_F_307377873_MVxS5nP1MnaoKYCfwqCFrXWunwGhjG8v.jpg',
            special: true,
            discount: 20,
        },
        {
            id: 15,
            name: 'Organic Orange Juice',
            type: 'Drink',
            price: 5.49,
            image: 'https://t3.ftcdn.net/jpg/00/82/63/32/360_F_82633218_O7UXYKOVTuzDHEZo1DQLL9k5kPwlRcXg.jpg',
            special: true,
            discount: 20,
        },
    ],
};

//All images acquired from Adobe Stock Images

localStorage.setItem('Inventory', JSON.stringify(Inventory));

export default Inventory;
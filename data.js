const data = {
    title: "Заголовок страницы",
    statistics: {
        YM_ID: 12345678,
        GA_ID: 'UA-00000000-00',
        RMBT_ID: 12345678,
        PAGE_LOAD_EVENT: false
    },
    share: {
        default_img: "/share.jpg",
        title: "Заголовок Share",
        description: "Описание Share",
        dynamic_shares:
        {
            // 1: {
            //     img: '/share/share_1.jpg',
            //     title: 'Супрематизм или Supreme',
            //     description: 'Кажется, абстрактная живопись не ваша сильная сторона'
            // },
            // 2: {
            //     img: '/share/share_2.jpg',
            //     title: 'Ретроград в авангарде',
            //     description: 'Про супрематизм и футуризм вы возможно слышали'
            // },
            // 3: {
            //     img: '/share/share_3.jpg',
            //     title: 'Магистр авангардных искусств',
            //     description: 'Ваш следующий шаг - собственная выставка'
            // }
        }

    },

    allPrerenderRoutes: [ //without dynamic_shares
        '/',
    ]

}


data.allPrerenderRoutes = data.allPrerenderRoutes.concat(Object.keys(data.share.dynamic_shares).map(el => '/' + el))

export default data
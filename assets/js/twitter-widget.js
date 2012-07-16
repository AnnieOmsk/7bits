new TWTR.Widget({
    version: 2,
    type: 'list',
    rpp: 5,
    interval: 30000,
    title: 'Всё, что происходит в',
    subject: '7bits',
    width: 930,
    height: 250,
    theme: {
    shell: {
    background: '#868cbe',
    color: '#ffffff'
    },
tweets: {
    background: '#ffffff',
    color: '#444444',
    links: '#3673b8'
    }
},
features: {
    scrollbar: true,
    loop: true,
    live: true,
    behavior: 'default'
    }
}).render().setList('twitter', 'd9').start();
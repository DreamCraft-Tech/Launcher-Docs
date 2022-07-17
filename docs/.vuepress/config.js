module.exports = {
    evergreen : true,
    base : '/Launcher-Docs/',
    locales : {
        '/zh/' : {
            lang : 'zh-CN',
            title : 'DreamCraft Launcher 文档',
            description : 'DreamCraft Launcher 应用程序的说明文档。'
        },
        '/' : {
            lang : 'en-US',
            title: 'DreamCraft Launcher Docs',
            description: 'Docs of DreamCraft Launcher Application.',
        },
    },
    themeConfig : {
        repo : 'DreamCraft-Tech/Launcher-Docs',
        docsBranch : 'main',
        docsDir : 'docs',
        editLinks : true,
        sidebarDepth :3,
        locales :{
            '/zh/':{
                selectText : '选择语言',
                label : '简体中文',
                docsDir : 'docs/zh',
                editLinkText : '在 Github 上提交更改',
                lastUpdated : '最后更新',
                nav : [
                    {
                        text : 'Launcher',
                        link : '/launcher/',
                    },
                    {
                        text : 'DCL API',
                        link : '/launcher-api/',
                    },
                    {
                        text : 'Web Service',
                        link : 'web-service',
                    },
                ]
            },
            '/' : {
                selectText : 'Language',
                label : 'English',
                docsDir : 'docs/en',
                editLinkText : 'Commit changes on Github',
                lastUpdated : 'Last updated',
                nav : [
                    {
                        text : 'Launcher',
                        link : '/launcher/',
                    },
                    {
                        text : 'DCL API',
                        link : '/launcher-api/',
                    },
                    {
                        text : 'Web Service',
                        link : '/web-service/',
                    },
                ],
            },
        },
    },
  }
  
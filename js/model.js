const model = {
    app: {
        loggedInUser: null,
        currentPage: 'login',
        displayMode: ["Dark", "Light"],
        language: ["Norsk"],
    },
    interface: {
        login: {
            uNameInput: '',
            pWordInput: '',

        },
        registerUser: {
            uNameInput: '',
            pWordInput: '',
            repeatPassword: '',

        },
        dashboard: {
            tabIndex: 0,
            graph: null,
            statusBar: 0,

        },
        activity: {
            selectedNK: "",
        },
        goals: {
            selectTimeframe: '',
            goalText: '',
            progressBar: 0,
            progressCircle: 0,
        },
        history: {
            summaryGraph: '',
            logDiary: {
                datePicker: null,
                dataView: diaryLogData['datepicker']
            }


        },
        logPage: {
            checkOptions: {
                plannedAct: ['taskList[1]', 'taskList[2]'],
                standardAct: ['tasks'], //tenker å få til en måte å refferere denne 
            },
            diary: {
                monday: { mood: '', progress: '', nextStep: '' },
                tuesday: { mood: '', progress: '', nextStep: '' },
                wednesday: { mood: '', progress: '', nextStep: '' },
                thursday: { mood: '', progress: '', nextStep: '' },
                friday: { mood: '', progress: '', nextStep: '' },
            },
            /* logDataBtn: 'function diaryLog(){diaryLogData.push(logpage.diary)}',  //grov eksempel kode, den blir nok ikke å være her, men blir knytta til knappen på noe vis :p */

        },
        addGoalAct: {
            themeSelector: ['vanedanning', 'growth mindset', 'studieteknikk', 'psykologisk trygghet', 'karakterstyrker'],
            activitySelector: ['Meditation', 'Pomodoro',],
            inputTextTheme: '',
            inputTextActivity: '',
            taskFrequency: {//relasjon mellom "taskPerUnit" og "taskFrequencyUnit": om du velger f.eks 'uke' og setter 'taskPerUnit' til 3, så blir aktiviteten 3 ganger per uke (fra gitt dato, til gitt dato)
                once: {
                    setTime: {
                        date: '',
                        time: '',
                    },
                    looseTime: {
                        timeunit: {
                            week: '',
                            month: '',
                        },
                    },
                },
                repeats: {
                    taskFrequencyUnit: ['Daglig', 'Uke', 'Måned', 'År', '5 år'], 
                    PerUnit: [0, 1, 2, 3, 4, 5 ++],
                    fromDate: null,
                    toDate: null,
                }
            },
           
        
            

        },
    },



    data: {
        user: {
            userName: 'Martin',
            email: 'martin@123.no',
            password: '*******',
        },
        taskList: [{
            name: "jog",
            theme: "habit",
            taskText: "joggetur",
            frequency: { timeUnit: "week", repeatsPr: 3, from: 'date', to: 'date' },
        },
        {
            name: undefined,
            theme: undefined,
            taskText: undefined,
            frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

        },
        ],
        standardTasks: [
            {
                name: 'jog',
                theme: undefined,
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
            {
                name: 'read',
                theme: undefined,
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
            {
                name: 'study',
                theme: 'pomodoro',
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
            {
                name: 'meditate',
                theme: undefined,
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
        ],
        goalList: {
            daily:
                [
                    {
                        taskId: "D" + 1,
                        name: undefined,
                        theme: undefined,
                        taskText: undefined,
                        frequency: { repeatsPr: undefined, from: 'time', to: 'time' },
                    },
                    {
                        taskId: "D" + 2,
                        name: undefined,
                        theme: undefined,
                        taskText: undefined,
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                    },

                ],
            weekly:
                [
                    {
                        taskId: null,
                        name: undefined,
                        theme: undefined,
                        taskText: undefined,
                        frequency: { repeatsPr: undefined, from: 'time', to: 'time' },
                    },
                    {
                        taskId: null,
                        name: undefined,
                        theme: undefined,
                        taskText: undefined,
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                    },

                ],

            monthly:
                [
                    {
                        taskId: null,
                        name: undefined,
                        theme: undefined,
                        taskText: undefined,
                        frequency: { repeatsPr: undefined, from: 'time', to: 'time' },
                    },
                    {
                        taskId: null,
                        name: undefined,
                        theme: undefined,
                        taskText: undefined,
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                    },

                ],

            year:
                [
                    {
                        taskId: null,
                        name: undefined,
                        theme: undefined,
                        taskText: undefined,
                        frequency: { repeatsPr: undefined, from: 'time', to: 'time' },
                    },
                    {
                        taskId: null,
                        name: undefined,
                        theme: undefined,
                        taskText: undefined,
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                    },

                ],

            fiveYearPlan:
                [
                    {
                        taskId: null,
                        name: undefined,
                        theme: undefined,
                        taskText: undefined,
                        frequency: { repeatsPr: undefined, from: 'time', to: 'time' },
                    },
                    {
                        taskId: null,
                        name: undefined,
                        theme: undefined,
                        taskText: undefined,
                        frequency: { repeatsPr: undefined, from: undefined, to: undefined },
                    },

                ],

        },
        diaryLogData: [  //Her havner dagbok data som blir logget
            {
                date: '01/01/2023',
                diary: {
                    monday: { mood: '', progress: '', nextStep: '' },
                    tuesday: { mood: '', progress: '', nextStep: '' },
                    wednesday: { mood: '', progress: '', nextStep: '' },
                    thursday: { mood: '', progress: '', nextStep: '' },
                    friday: { mood: '', progress: '', nextStep: '' },
                },
            },
            {
                date: '02/01/2023',
                diary: {
                    monday: { mood: '', progress: '', nextStep: '' },
                    tuesday: { mood: '', progress: '', nextStep: '' },
                    wednesday: { mood: '', progress: '', nextStep: '' },
                    thursday: { mood: '', progress: '', nextStep: '' },
                    friday: { mood: '', progress: '', nextStep: '' },
                },
            },
            {
                date: '03/01/2023',
                diary: {
                    monday: { mood: '', progress: '', nextStep: '' },
                    tuesday: { mood: '', progress: '', nextStep: '' },
                    wednesday: { mood: '', progress: '', nextStep: '' },
                    thursday: { mood: '', progress: '', nextStep: '' },
                    friday: { mood: '', progress: '', nextStep: '' },
                },
            },
        ]
    }
}

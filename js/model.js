const model = {
    app: {
        loggedInUser: null,
        currentPage: 'login',
        displayMode: ["Dark", "Light"],
        language: ["Norsk"],
    },
    interface: {
        login: {
            pageTitle,
            uNameInput,
            pWordInput,
            loginButton,
            registerButton

        },
        registerUser: {
            pageTitle,
            uNameInput,
            pWordInput,
            repeatPassword,
            registerButton,
            backButton

        },
        dashboard: {
            tabs: "",
            logPageButton: "",
            graph: "",
            statusBar: "",

        },
        activity: {
            dropdownButton: "",
            addTask: "",

        },
        goals: {
            dateDropDownButton: '',
            statusBar2: '',



        },
        history: {
            summaryGraph: '',
            logDiary: {
                
            }


        },
        logPage: {
            checkOptions: {
                plannedAct: ['taskList[1]', 'taskList[2]'],
                standardAct: ['tasks'],
            },
            diary: {
                monday: { mood: '', progress: '', nextStep: '' },
                tuesday: { mood: '', progress: '', nextStep: '' },
                wednesday: { mood: '', progress: '', nextStep: '' },
                thursday: { mood: '', progress: '', nextStep: '' },
                friday: { mood: '', progress: '', nextStep: '' },
            },
            logDataBtn: 'function diaryLog(){diaryLogData.push(logpage.diary)}',  //grov eksempel kode, den blir nok ikke å være her, men blir knytta til knappen på noe vis :p

        },
        addGoalAct: {
            dropdownButton: '',
            themes: ['vanedanning', 'growth mindset', 'studieteknikk', 'psykologisk trygghet', 'karakterstyrker'],
            dropdownButton2: '',
            taskCategoriesNor: ['Meditation', 'Pomodoro',],
            InputText: '',
            taskFrequency: {//relasjon mellom "taskPerUnit" og "taskFrequencyUnit": om du velger f.eks 'uke' og setter 'taskPerUnit' til 3, så blir aktiviteten 3 ganger per uke (fra gitt dato, til gitt dato)
                taskFrequencyUnit: ['Daglig', 'Uke', 'Måned', 'År', '5 år'], 
                PerUnit: [0, 1, 2, 3, 4, 5 ++],
                fromDate: null,
                toDate: null,
            }

        },
    },



    data: {
        user: {
            userId: 1,
            userName: 'Martin',
            email: 'martin@123.no',
            password: '*******',
        },
        taskList: [{
            taskId: 1,
            name: "jog",
            theme: "habit",
            taskText: "joggetur",
            frequency: { timeUnit: "week", repeatsPr: 3, from: 'date', to: 'date' },
        },
        {
            taskId: 2,
            name: undefined,
            theme: undefined,
            taskText: undefined,
            frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

        },
        ],
        StandardTasks: [
            {
                taskId: 1,
                name: 'jog',
                theme: undefined,
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
            {
                taskId: 2,
                name: 'read',
                theme: undefined,
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
            {
                taskId: 3,
                name: 'study',
                theme: 'pomodoro',
                taskText: undefined,
                frequency: { timeUnit: undefined, repeatsPr: 'number', from: undefined, to: undefined },

            },
            {
                taskId: 4,
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
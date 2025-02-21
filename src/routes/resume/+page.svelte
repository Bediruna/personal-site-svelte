<script>
    import WorkExperience from '/src/components/WorkExperience.svelte';
    import Education from '/src/components/Education.svelte';
    import Certifications from '/src/components/Certifications.svelte';

    const jobs = [
        {
            title: 'Software Engineer',
            company: 'Beacon Hill (Contract)',
            period: 'Jun 2024 – Present',
            description: 'Architecting and implementing AWS-hosted solutions utilizing .NET 8 and Lambda functions. Developing cross-platform solutions by integrating Xamarin with .NET Web API.',
            tasks: [
                'Architected and implemented AWS-hosted solutions using .NET 8 and Lambda functions.',
                'Streamlined customer enrollment processes through cloud integration.',
                'Engineered cross-platform solutions by integrating Xamarin with .NET Web API.',
                'Established robust communication channels between mobile applications and cloud infrastructure.'
            ]
        },
        {
            title: '.NET Web Developer',
            company: 'Traffic Safety Store',
            period: 'Jun 2023 – Jun 2024',
            description: 'Full-stack eCommerce platform development using C# .NET and Vue.js. Optimizing database performance and designing scalable APIs.',
            tasks: [
                'Developed full-stack eCommerce platform using C# .NET and Vue.js.',
                'Implemented hybrid ORM strategy using Entity Framework and Dapper, reducing query response times by 40%.',
                'Designed and deployed scalable REST APIs for seamless front-end and back-end integration.',
                'Established testing protocols and code quality standards to enhance application reliability.'
            ]
        },
        {
            title: 'Web Application Developer (Contract)',
            company: 'Center for Applied Management',
            period: 'Oct 2022 – May 2023',
            description: 'Modernizing legacy codebase using React and developing RESTful APIs with .NET.',
            tasks: [
                'Engineered responsive front-end features using React.',
                'Modernized legacy codebase to improve maintainability and performance.',
                'Developed RESTful APIs using .NET, ensuring seamless integration with front-end components.'
            ]
        },
        {
            title: 'Full Stack .NET Developer',
            company: 'Amerinational Management Systems',
            period: 'Nov 2020 – Jul 2022',
            description: 'Full-stack development using .NET Core APIs, Razor Pages, MVC, and Blazor. Migrated a 30-year-old system to a modern .NET Core solution.',
            tasks: [
                'Led migration of a 30-year-old martial arts software system to modern .NET Core architecture.',
                'Developed high-throughput message processing systems handling thousands of daily transactions.',
                'Created a Xamarin-based mobile application integrated with Web APIs.',
                'Developed an automated document merging system to improve operational efficiency.'
            ]
        },
        {
            title: 'Software Developer',
            company: 'USALLIANCE Financial',
            period: 'Nov 2018 – Oct 2020',
            description: 'Designed and developed ASP.Net Web Forms applications with full-stack responsibilities.',
            tasks: [
                'Designed and integrated full-stack financial applications using C#, ASP.NET Web Forms, and .NET Core.',
                'Built responsive front-end interfaces with JavaScript, jQuery, HTML, CSS, and Bootstrap.',
                'Collaborated with business analysts to implement testing protocols and ensure application reliability.',
                'Authored technical documentation and best practices for software maintenance and deployment.'
            ]
        },
        {
            title: 'Software Developer / EDI Manager',
            company: 'DM World Logistics',
            period: 'May 2017 – Oct 2018',
            description: 'Developed transportation management software with integrated EDI capabilities.',
            tasks: [
                'Designed and developed transportation management software from the ground up.',
                'Integrated EDI systems to streamline logistics operations.',
                'Automated key processes to improve operational efficiency.',
                'Communicated directly with management to implement optimal software solutions.'
            ]
        }
    ];

    const education = [
        {
            institution: 'Western Governors University',
            period: 'Dec 2017 - Sep 2020',
            degree: 'Bachelor of Science in Software Development'
        },
        {
            institution: 'Northern Essex Community College',
            period: 'May 2014 - Aug 2017',
            degree: 'Associate of Science in Computer Science'
        }
    ];

    const certifications = [
        {
            name: 'AWS Certified Cloud Practitioner',
            date: 'Sept 2024'
        },
        {
            name: 'Microsoft Certified: Azure Fundamentals',
            date: 'Apr 2024',
            id: '996505428'
        },
        {
            name: 'CompTIA Project+',
            date: 'Aug 2020'
        },
        {
            name: 'CompTIA A+',
            date: 'May 2018'
        }
    ];
</script>

<div class="container my-5">
    <WorkExperience {jobs} />
    <Education {education} />
    <Certifications {certifications} />
</div>

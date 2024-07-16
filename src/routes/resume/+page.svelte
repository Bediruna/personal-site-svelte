<script>
    import WorkExperience from '/src/components/WorkExperience.svelte';
    import Education from '/src/components/Education.svelte';
    import Certifications from '/src/components/Certifications.svelte';

    const jobs = [
        {
            title: 'Software Engineer (Contract)',
            company: 'Center for Applied Management',
            period: 'Oct 2022 - Present',
            description: 'Full stack web application development using .Net on the back end. React on the front end. Fixing bugs and adding features to the existing project.',
            tasks: [
                'Working to bring existing code up to current standards.',
                'Adding client-requested features.'
            ]
        },
        {
            title: 'Freelance Software Developer',
            company: 'Upwork',
            period: 'Jun 2022 - Present',
            description: '.Net Core Web Application development. Working on the company\'s eCommerce platform. Adding features and fixing bugs for an existing solution.',
            tasks: [
                'Assisted clients with basic web development.',
                'Used my experience with HTML, CSS, and JS to improve existing client websites.',
                'Provided game testing feedback based on Unity game development experience.',
                'Provided advice based on years of varied software development experience.'
            ]
        },
        {
            title: 'Full Stack .Net Developer',
            company: 'Amerinational Management Systems',
            period: 'Nov 2020 - Jul 2022',
            description: 'Full stack .NET development. Working with .NET Core Web APIs, Razor Pages, MVC, Xamarin, Blazor, and web development. Developing applications and systems starting from setting up the server and database, all the way to creating and fine tuning the user interface.',
            tasks: [
                'Played a key role in updating a 30-year-old system to a modern .Net Core solution.',
                'Developed systems that transported 1000s of messages daily.',
                'Developed a Xamarin based mobile application. Allowing AMS to be competitive in the market and meet the needs of our clients.',
                'Developed an application that automated document merging to save hours of manual labor.'
            ]
        },
        {
            title: 'Software Developer',
            company: 'USALLIANCE Financial',
            period: 'Nov 2018 - Oct 2020',
            description: 'Designed and developed ASP.Net Web Forms applications from the front end to back end.',
            tasks: [
                'Designed, developed, and maintained code solutions for business software applications.',
                'Developed unit test cases/criteria to verify all functionality is working correctly based on specified requirements. Contribute to testing strategies, architecture, and provide feedback for improvements.',
                'Worked with QA and business teams to understand the modules and components targeted for development.',
                'Worked closely with the Business Analysts to ensure code quality, accuracy, and the correct business solution has been developed.',
                'Troubleshot program problems and failures and work with teams and vendors to resolve issues.',
                'Provided assistance to projects that support the implementation of company-wide information systems in collaboration with functional users.',
                'Developed and modified technical documentation to support application implementation, maintenance, and operations.',
                'Technologies used include: C#, ASP.NET, JavaScript, jQuery, HTML, CSS, and SQL.'
            ]
        },
        {
            title: 'Software Developer / EDI Manager',
            company: 'DM World Logistics',
            period: 'Jun 2017 - Oct 2018',
            description: 'Developed internal transportation management software from the ground up. Technologies used include: C#, ASP.NET, JavaScript, HTML, CSS, PHP, and SQL.',
            tasks: [
                'Designed and made critical choices in the development of software.',
                'Wrote and implemented automation scripts that saved hours of repetitive work.',
                'Researched, implemented, and maintained software, utilities, tools, and scripts to automate or improve user experiences and efficiencies.',
                'Communicated directly with upper-level management to determine and implement the best solution for software-related issues.',
                'Facilitated EDI connection with essential customers.',
                'Maintained and troubleshot EDI systems.'
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
            name: 'CompTIA Project+',
            date: 'Aug 2020'
        },
        {
            name: 'CompTIA A+',
            date: 'May 2018'
        },
        {
            name: 'CIW Advanced HTML5 & CSS3 Specialist',
            date: 'Jan 2018',
            id: 'CIW ID 800822'
        },
        {
            name: 'CIW User Interface Designer',
            date: 'Jul 2018',
            id: 'CIW ID 800822'
        }
    ];
</script>

<div class="container my-5">
    <WorkExperience {jobs} />
    <Education {education} />
    <Certifications {certifications} />
</div>

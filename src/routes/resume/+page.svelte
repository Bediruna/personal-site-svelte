<script>
    import WorkExperience from '/src/components/WorkExperience.svelte';
    import Education from '/src/components/Education.svelte';
    import Certifications from '/src/components/Certifications.svelte';

    const jobs = [
        {
            title: 'Founder / Developer',
            company: 'Technology Presence - Remote',
            period: 'Oct 2024 – Present',
            tasks: [
                'Designed and built high performance and light-weight web sites that increased customer acquisition. With Google Analytics that showed increased traffic by several thousands.',
                'Provided expert advice on which software solutions would best assist clients achieve their goals.',
                'Found critical failure points and assisted clients save thousands of dollars when running business related technologies.'
            ]
        },
        {
            title: 'Senior Software Developer (Contract)',
            company: 'Beacon Hill - Orlando, FL',
            period: 'Jun 2024 – Oct 2024',
            tasks: [
                'Architected and implemented AWS-hosted solutions utilizing .NET 8 and Lambda functions, streamlining customer enrollment processes through seamless cloud integration.',
                'Engineered cross-platform solutions by integrating Xamarin with .NET Web API, establishing robust communication channels between mobile applications and cloud infrastructure.'
            ]
        },
        {
            title: '.NET Web Developer',
            company: 'Traffic Safety Store - West Chester, PA',
            period: 'Jun 2023 – Jun 2024',
            tasks: [
                'Spearheaded full-stack eCommerce platform development using C# .NET ecosystem integrated with Vue.js, resulting in enhanced user experience and increased customer engagement.',
                'Implemented hybrid ORM strategy using Entity Framework and Dapper, achieving 40% decrease in query response times while maintaining data integrity.',
                'Designed and deployed scalable REST APIs supporting seamless integration between front-end and back-end systems, as well as established testing protocols and code quality standards for improved application reliability.'
            ]
        },
        {
            title: 'Web Application Developer (Contract)',
            company: 'Center for Applied Management - Remote',
            period: 'Oct 2022 – May 2023',
            tasks: [
                'Engineered responsive front-end features using React, modernizing legacy codebase.',
                'Worked to maintain and add features to existing .NET based solutions.',
                'Developed RESTful APIs using .NET, ensuring seamless integration with front-end components.'
            ]
        },
        {
            title: 'Full Stack .NET Developer',
            company: 'Amerinational Management Services - Orlando, FL',
            period: 'Nov 2020 – Jul 2022',
            tasks: [
                'Played a key role in updating a 30-year-old system to a modern .NET Core solution.',
                'Developed systems capable of transporting 1000s of messages daily.',
                'Developed a Xamarin based mobile application. Allowing AMS to be competitive in the market and meet the needs of our clients.',
                'Developed an application that automated document merging to save hours of manual labor.'
            ]
        },
        {
            title: 'Web Application Developer',
            company: 'USALLIANCE Financial - Chelmsford, MA',
            period: 'Nov 2018 – Oct 2020',
            tasks: [
                'Designed and developed ASP.Net Web Forms applications from the HTML in the front end to the C# and SQL in the back end. Web pages that have processed several thousand credit card applications.',
                'Worked closely with the business analysts to ensure code quality, accuracy, and the correct business solution has been developed.',
                'Developed and modified technical documentation to support application implementation, maintenance, and operations.'
            ]
        },
        {
            title: 'Junior Software Developer / EDI Manager',
            company: 'DM World Logistics - Orlando, FL',
            period: 'May 2017 – Oct 2018',
            tasks: [
                'Developed internal software and automation solutions to solve critical inefficiencies.',
                'Assisted in the development of a .NET based internal transport management system.',
                'Facilitated EDI connections with key customers.'
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

/* eslint-disable prettier/prettier */
const BASE_URL = typeof window !== 'undefined' ? window.location.href : '';

type Skill = { label: string; value: string; iconUrl: string; companyUrl: string };

export const SKILLS: Record<string, Skill> = {
    openui5: {
        label: 'OpenUI5',
        value: 'openui5',
        iconUrl: BASE_URL + 'skills-assets/openui5.svg',
    },
    terraform: {
        label: 'Terraform',
        value: 'terraform',
        iconUrl: BASE_URL + 'skills-assets/terraformio-icon.svg',
        companyUrl: 'https://www.terraform.io/',
    },
    vuejs: {
        label: 'Vue.js',
        value: 'vuejs',
        iconUrl: BASE_URL + 'skills-assets/vuejs-original-wordmark.svg',
        companyUrl: 'https://vuejs.org/',
    },
    react: {
        label: 'React',
        value: 'react',
        iconUrl: BASE_URL + 'skills-assets/react-original-wordmark.svg',
        companyUrl: 'https://reactjs.org/',
    },
    angular: {
        label: 'Angular',
        value: 'angular',
        iconUrl: BASE_URL + 'skills-assets/angularjs-original.svg',
        companyUrl: 'https://angular.io/',
    },
    aws: {
        label: 'AWS',
        value: 'aws',
        iconUrl: BASE_URL + 'skills-assets/amazonwebservices-original-wordmark.svg',
        companyUrl: 'https://angularjs.org/',
    },
    android: {
        label: 'Android',
        value: 'android',
        iconUrl: BASE_URL + 'skills-assets/android-original-wordmark.svg',
        companyUrl: 'https://www.android.com/intl/en_in/',
    },
    backbonejs: {
        label: 'Backbone.js',
        value: 'backbonejs',
        iconUrl: BASE_URL + 'skills-assets/backbonejs-original-wordmark.svg',
        companyUrl: 'https://backbonejs.org/',
    },
    bootstrap: {
        label: 'Bootstrap',
        value: 'bootstrap',
        iconUrl: BASE_URL + 'skills-assets/bootstrap-plain.svg',
        companyUrl: 'https://getbootstrap.com/docs/3.4/javascript/',
    },
    c: {
        label: 'C',
        value: 'c',
        iconUrl: BASE_URL + 'skills-assets/c-original.svg',
        companyUrl: 'https://www.cprogramming.com/',
    },
    cplusplus: {
        label: 'C++',
        value: 'cplusplus',
        iconUrl: BASE_URL + 'skills-assets/cplusplus-original.svg',
        companyUrl: 'https://www.cplusplus.com/',
    },
    css3: {
        label: 'CSS3',
        value: 'css3',
        iconUrl: BASE_URL + 'skills-assets/css3-original-wordmark.svg',
        companyUrl: 'https://www.w3schools.com/css/',
    },
    csharp: {
        label: 'C#',
        value: 'csharp',
        iconUrl: BASE_URL + 'skills-assets/csharp-original.svg',
        companyUrl: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
    d3js: {
        label: 'D3.js',
        value: 'd3js',
        iconUrl: BASE_URL + 'skills-assets/d3js-original.svg',
        companyUrl: 'https://d3js.org/',
    },
    django: {
        label: 'Django',
        value: 'django',
        iconUrl: BASE_URL + 'skills-assets/django-original.svg',
        companyUrl: 'https://www.djangoproject.com/',
    },
    docker: {
        label: 'Docker',
        value: 'docker',
        iconUrl: BASE_URL + 'skills-assets/docker-original-wordmark.svg',
        companyUrl: 'https://www.docker.com/',
    },
    dotnet: {
        label: '.NET',
        value: 'dotnet',
        iconUrl: BASE_URL + 'skills-assets/dot-net-original-wordmark.svg',
        companyUrl: 'https://dotnet.microsoft.com/download/dotnet-framework',
    },
    electron: {
        label: 'Electron',
        value: 'electron',
        iconUrl: BASE_URL + 'skills-assets/electron-original.svg',
        companyUrl: 'https://www.electronjs.org/',
    },
    go: {
        label: 'Go',
        value: 'go',
        iconUrl: BASE_URL + 'skills-assets/go-original.svg',
        companyUrl: 'https://go.dev/',
    },
    gulp: {
        label: 'gulp.js',
        value: 'gulp',
        iconUrl: BASE_URL + 'skills-assets/gulp-plain.svg',
        companyUrl: 'https://gulpjs.com/',
    },
    html5: {
        label: 'HTML5',
        value: 'html5',
        iconUrl: BASE_URL + 'skills-assets/html5-original-wordmark.svg',
        companyUrl: 'https://en.wikipedia.org/wiki/HTML5',
    },
    java: {
        label: 'Java',
        value: 'java',
        iconUrl: BASE_URL + 'skills-assets/java-original-wordmark.svg',
        companyUrl: 'https://www.java.com/',
    },
    javascript: {
        label: 'JavaScript',
        value: 'javascript',
        iconUrl: BASE_URL + 'skills-assets/javascript-original.svg',
        companyUrl: 'https://www.javascript.com/',
    },
    typescript: {
        label: 'TypeScript',
        value: 'typescript',
        iconUrl: BASE_URL + 'skills-assets/typescript-original.svg',
        companyUrl: 'https://www.typescriptlang.org/',
    },
    laravel: {
        label: 'Laravel',
        value: 'laravel',
        iconUrl: BASE_URL + 'skills-assets/laravel-plain-wordmark.svg',
        companyUrl: 'https://laravel.com/',
    },
    symfony: {
        label: 'Symfony',
        value: 'symfony',
        iconUrl: BASE_URL + 'skills-assets/symfony_black_03.svg',
        companyUrl: 'https://symfony.com/',
    },
    codeigniter: {
        label: 'CodeIgniter',
        value: 'codeigniter',
        iconUrl: BASE_URL + 'skills-assets/codeigniter.svg',
        companyUrl: 'https://codeigniter.com/',
    },
    mongodb: {
        label: 'MongoDB',
        value: 'mongodb',
        iconUrl: BASE_URL + 'skills-assets/mongodb-original-wordmark.svg',
        companyUrl: 'https://www.mongodb.com/',
    },
    mysql: {
        label: 'MySQL',
        value: 'mysql',
        iconUrl: BASE_URL + 'skills-assets/mysql-original-wordmark.svg',
        companyUrl: 'https://www.mysql.com/',
    },
    php: {
        label: 'PHP',
        value: 'php',
        iconUrl: BASE_URL + 'skills-assets/php-original.svg',
        companyUrl: 'https://www.php.net/',
    },
    postgresql: {
        label: 'PostgreSQL',
        value: 'postgresql',
        iconUrl: BASE_URL + 'skills-assets/postgresql-original-wordmark.svg',
        companyUrl: 'https://www.postgresql.org/',
    },
    rails: {
        label: 'Ruby on Rails',
        value: 'rails',
        iconUrl: BASE_URL + 'skills-assets/rails-original-wordmark.svg',
        companyUrl: 'https://rubyonrails.org/',
    },
    redis: {
        label: 'Redis',
        value: 'redis',
        iconUrl: BASE_URL + 'skills-assets/redis-original-wordmark.svg',
        companyUrl: 'https://redis.io/',
    },
    ruby: {
        label: 'Ruby',
        value: 'ruby',
        iconUrl: BASE_URL + 'skills-assets/ruby-original-wordmark.svg',
        companyUrl: 'https://www.ruby-lang.org/en/',
    },
    rust: {
        label: 'Rust',
        value: 'rust',
        iconUrl: BASE_URL + 'skills-assets/rust-plain.svg',
        companyUrl: 'https://www.rust-lang.org/',
    },
    sass: {
        label: 'Sass',
        value: 'sass',
        iconUrl: BASE_URL + 'skills-assets/sass-original.svg',
        companyUrl: 'https://sass-lang.com/',
    },
    scala: {
        label: 'Scala',
        value: 'scala',
        iconUrl: BASE_URL + 'skills-assets/scala-original-wordmark.svg',
        companyUrl: 'https://www.scala-lang.org/',
    },
    nodejs: {
        label: 'Node.js',
        value: 'nodejs',
        iconUrl: BASE_URL + 'skills-assets/nodejs-original-wordmark.svg',
        companyUrl: 'https://nodejs.org/',
    },
    python: {
        label: 'Python',
        value: 'python',
        iconUrl: BASE_URL + 'skills-assets/python-original.svg',
        companyUrl: 'https://www.python.org/',
    },
    swift: {
        label: 'Swift',
        value: 'swift',
        iconUrl: BASE_URL + 'skills-assets/swift-original-wordmark.svg',
        companyUrl: 'https://developer.apple.com/swift/',
    },
    spring: {
        label: 'Spring',
        value: 'spring',
        iconUrl: BASE_URL + 'skills-assets/springio-icon.svg',
        companyUrl:
            'https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html#:~:text=The%20Spring%20Expression%20Language%20(SpEL,and%20basic%20string%20templating%20functionality.',
    },
    oracle: {
        label: 'Oracle',
        value: 'oracle',
        iconUrl: BASE_URL + 'skills-assets/oracle-original.svg',
        companyUrl: 'https://www.oracle.com/in/index.html',
    },
    nginx: {
        label: 'Nginx',
        value: 'nginx',
        iconUrl: BASE_URL + 'skills-assets/nginx-original.svg',
        companyUrl: 'https://www.nginx.com/',
    },
    linux: {
        label: 'Linux',
        value: 'linux',
        iconUrl: BASE_URL + 'skills-assets/linux-original.svg',
        companyUrl: 'https://www.linux.org/',
    },
    redux: {
        label: 'Redux',
        value: 'redux',
        iconUrl: BASE_URL + 'skills-assets/redux-original.svg',
        companyUrl: 'https://redux.js.org/',
    },
    webpack: {
        label: 'Webpack',
        value: 'webpack',
        iconUrl: BASE_URL + 'skills-assets/webpack-original.svg',
        companyUrl: 'https://webpack.js.org/',
    },
    express: {
        label: 'Express.js',
        value: 'express',
        iconUrl: BASE_URL + 'skills-assets/express-original-wordmark.svg',
        companyUrl: 'https://expressjs.com/',
    },
    flutter: {
        label: 'Flutter',
        value: 'flutter',
        iconUrl: BASE_URL + 'skills-assets/flutterio-icon.svg',
        companyUrl: 'https://flutter.dev/',
    },
    dart: {
        label: 'Dart',
        value: 'dart',
        iconUrl: BASE_URL + 'skills-assets/dartlang-icon.svg',
        companyUrl: 'https://dart.dev/',
    },
    kotlin: {
        label: 'Kotlin',
        value: 'kotlin',
        iconUrl: BASE_URL + 'skills-assets/kotlinlang-icon.svg',
        companyUrl: 'https://kotlinlang.org/',
    },
    tensorflow: {
        label: 'TensorFlow',
        value: 'tensorflow',
        iconUrl: BASE_URL + 'skills-assets/tensorflow-icon.svg',
        companyUrl: 'https://www.tensorflow.org/',
    },
    chartjs: {
        label: 'Chart.js',
        value: 'chartjs',
        iconUrl: BASE_URL + 'skills-assets/logo-title.svg',
        companyUrl: 'https://www.chartjs.org/',
    },
    jenkins: {
        label: 'Jenkins',
        value: 'jenkins',
        iconUrl: BASE_URL + 'skills-assets/jenkins-icon.svg',
        companyUrl: 'https://www.jenkins.io/',
    },
    gcp: {
        label: 'GCP',
        value: 'gcp',
        iconUrl: BASE_URL + 'skills-assets/google_cloud-icon.svg',
        companyUrl: 'https://cloud.google.com/',
    },
    kubernetes: {
        label: 'Kubernetes',
        value: 'kubernetes',
        iconUrl: BASE_URL + 'skills-assets/kubernetes-icon.svg',
        companyUrl: 'https://kubernetes.io/',
    },
    azure: {
        label: 'Azure',
        value: 'azure',
        iconUrl: BASE_URL + 'skills-assets/microsoft_azure-icon.svg',
        companyUrl: 'https://azure.microsoft.com/en-in/',
    },
    git: {
        label: 'Git',
        value: 'git',
        iconUrl: BASE_URL + 'skills-assets/git-scm-icon.svg',
        companyUrl: 'https://github.com/',
    },
    kafka: {
        label: 'Kafka',
        value: 'kafka',
        iconUrl: BASE_URL + 'skills-assets/apache_kafka-icon.svg',
        companyUrl: 'https://kafka.apache.org/',
    },
    solr: {
        label: 'Solr',
        value: 'solr',
        iconUrl: BASE_URL + 'skills-assets/apache_solr-icon.svg',
        companyUrl: 'https://solr.apache.org/',
    },
    cassandra: {
        label: 'Cassandra',
        value: 'cassandra',
        iconUrl: BASE_URL + 'skills-assets/apache_cassandra-icon.svg',
        companyUrl: 'https://cassandra.apache.org/_/index.html',
    },
    rabbitMQ: {
        label: 'RabbitMQ',
        value: 'rabbitMQ',
        iconUrl: BASE_URL + 'skills-assets/rabbitmq-icon.svg',
        companyUrl: 'https://www.rabbitmq.com/',
    },
    hadoop: {
        label: 'Hadoop',
        value: 'hadoop',
        iconUrl: BASE_URL + 'skills-assets/apache_hadoop-icon.svg',
        companyUrl: 'https://hadoop.apache.org/',
    },
    bash: {
        label: 'Bash',
        value: 'bash',
        iconUrl: BASE_URL + 'skills-assets/gnu_bash-icon.svg',
        companyUrl: 'https://www.gnu.org/software/bash/',
    },
    pytorch: {
        label: 'pytorch',
        value: 'pytorch',
        iconUrl: BASE_URL + 'skills-assets/pytorch-icon.svg',
        companyUrl: 'https://pytorch.org/',
    },
    opencv: {
        label: 'OpenCV',
        value: 'opencv',
        iconUrl: BASE_URL + 'skills-assets/opencv-icon.svg',
        companyUrl: 'https://opencv.org/',
    },
    illustrator: {
        label: 'Illustrator',
        value: 'illustrator',
        iconUrl: BASE_URL + 'skills-assets/adobe_illustrator-icon.svg',
        companyUrl: 'https://www.adobe.com/in/products/illustrator.html',
    },
    photoshop: {
        label: 'Photoshop',
        value: 'photoshop',
        iconUrl: BASE_URL + 'skills-assets/photoshop-plain.svg',
        companyUrl: 'https://www.adobe.com/in/products/photoshop.html',
    },
    figma: {
        label: 'Figma',
        value: 'figma',
        iconUrl: BASE_URL + 'skills-assets/figma-icon.svg',
        companyUrl: 'https://www.figma.com/',
    },
    blender: {
        label: 'Blender',
        value: 'blender',
        iconUrl: BASE_URL + 'skills-assets/blender_community_badge_white.svg',
        companyUrl: 'https://www.blender.org/',
    },
    adobeindesign: {
        label: 'Adobe InDesign',
        value: 'adobeindesign',
        iconUrl: BASE_URL + 'skills-assets/adobeindesign.svg',
        companyUrl: 'https://www.adobe.com/in/products/indesign.html',
    },
    raspberrypi: {
        label: 'Raspberry Pi',
        value: 'raspberrypi',
        iconUrl: BASE_URL + 'skills-assets/raspberrypi.png',
        companyUrl: 'https://www.raspberrypi.org/',
    },
    invision: {
        label: 'Invision',
        value: 'invision',
        iconUrl: BASE_URL + 'skills-assets/invision.svg',
        companyUrl: 'https://www.invisionapp.com/',
    },
    gatsby: {
        label: 'Gatsby',
        value: 'gatsby',
        iconUrl: BASE_URL + 'skills-assets/gatsby.png',
        companyUrl: 'https://www.gatsbyjs.com/',
    },
    adobepremierepro: {
        label: 'Premiere Pro',
        value: 'adobepremierepro',
        iconUrl: BASE_URL + 'skills-assets/adobepremierepro.png',
        companyUrl: 'https://www.adobe.com/in/products/premiere.html',
    },
    adobedreamweaver: {
        label: 'Dreamweaver ',
        value: 'adobedreamweaver',
        iconUrl: BASE_URL + 'skills-assets/adobedreamweaver.png',
        companyUrl: 'https://www.adobe.com/in/products/dreamweaver.html',
    },
    woocommerce: {
        label: 'WooCommerce',
        value: 'woocommerce',
        iconUrl: BASE_URL + 'skills-assets/woocommerce.png',
        companyUrl: 'https://woocommerce.com/',
    },
    adobexd: {
        label: 'Adobe XD',
        value: 'adobexd',
        iconUrl: BASE_URL + 'skills-assets/adobexd.png',
        companyUrl: 'https://www.adobe.com/in/products/xd.html',
    },

    graphql: {
        label: 'GraphQL',
        value: 'graphql',
        iconUrl: BASE_URL + 'skills-assets/graphql.png',
        companyUrl: 'https://graphql.org/',
    },
    openstack: {
        label: 'OpenStack',
        value: 'openstack',
        iconUrl: BASE_URL + 'skills-assets/openstack.png',
        companyUrl: 'https://www.openstack.org/',
    },
    meteor: {
        label: 'Meteor',
        value: 'meteor',
        iconUrl: BASE_URL + 'skills-assets/meteor.svg',
        companyUrl: 'https://www.meteor.com/',
    },
    keras: {
        label: 'Keras',
        value: 'keras',
        iconUrl: BASE_URL + 'skills-assets/keras.png',
        companyUrl: 'https://keras.io/',
    },
    ansible: {
        label: 'Ansible',
        value: 'ansible',
        iconUrl: BASE_URL + 'skills-assets/ansible.png',
        companyUrl: 'https://www.ansible.com/',
    },
    tableau: {
        label: 'Tableau',
        value: 'tableau',
        iconUrl: BASE_URL + 'skills-assets/tableau.svg',
        companyUrl: 'https://www.tableau.com/',
    },
    xampp: {
        label: 'XAMPP',
        value: 'xampp',
        iconUrl: BASE_URL + 'skills-assets/xampp.png',
        companyUrl: 'https://www.apachefriends.org/',
    },
    grafana: {
        label: 'Grafana',
        value: 'grafana',
        iconUrl: BASE_URL + 'skills-assets/grafana.png',
        companyUrl: 'https://grafana.com/',
    },
    mocha: {
        label: 'Mocha',
        value: 'mocha',
        iconUrl: BASE_URL + 'skills-assets/mocha.png',
        companyUrl: 'https://mochajs.org/',
    },
    chai: {
        label: 'Chai',
        value: 'chai',
        iconUrl: BASE_URL + 'skills-assets/chai.png',
        companyUrl: 'https://www.chaijs.com/',
    },
    d3: {
        label: 'D3.js',
        value: 'd3',
        iconUrl: BASE_URL + 'skills-assets/d3.png',
        companyUrl: 'https://d3js.org/',
    },
    firebase: {
        label: 'Firebase',
        value: 'firebase',
        iconUrl: BASE_URL + 'skills-assets/firebase.png',
        companyUrl: 'https://firebase.google.com/',
    },
    powerbi: {
        label: 'Power Bi',
        value: 'powerbi',
        iconUrl: BASE_URL + 'skills-assets/powerbi.png',
        companyUrl: 'https://powerbi.microsoft.com/en-us/',
    },
    nuxtjs: {
        label: 'Nuxt JS',
        value: 'nuxtjs',
        iconUrl: BASE_URL + 'skills-assets/nuxt.png',
        companyUrl: 'https://nuxtjs.org/',
    },
    latex: {
        label: 'LaTeX',
        value: 'latex',
        iconUrl: BASE_URL + 'skills-assets/latex.png',
        companyUrl: 'https://www.latex-project.org/',
    },
    arduino: {
        label: 'Arduino',
        value: 'arduino',
        iconUrl: BASE_URL + 'skills-assets/arduino.png',
        companyUrl: 'https://www.arduino.cc/',
    },
    mariadb: {
        label: 'Maria DB',
        value: 'mariadb',
        iconUrl: BASE_URL + 'skills-assets/mariadb.png',
        companyUrl: 'https://mariadb.org/',
    },

    elasticsearch: {
        label: 'Elastic Search',
        value: 'elasticsearch',
        iconUrl: BASE_URL + 'skills-assets/elasticsearch.png',
        companyUrl: 'https://www.elastic.co/',
    },
    kibana: {
        label: 'Kibana',
        value: 'kibana',
        iconUrl: BASE_URL + 'skills-assets/kibana.png',
        companyUrl: 'https://www.elastic.co/kibana/',
    },
    salesforce: {
        label: 'Salesforce',
        value: 'salesforce',
        iconUrl: BASE_URL + 'skills-assets/salesforce.png',
        companyUrl: 'https://www.salesforce.com/in/',
    },
    wordpress: {
        label: 'WordPress',
        value: 'wordpress',
        iconUrl: BASE_URL + 'skills-assets/wordpress.png',
        companyUrl: 'https://wordpress.com/',
    },
    influxdb: {
        label: 'InfluxDB',
        value: 'influxdb',
        iconUrl: BASE_URL + 'skills-assets/influxdb.svg',
        companyUrl: 'https://www.influxdata.com/',
    },
    jquery: {
        label: 'jQuery',
        value: 'jquery',
        iconUrl: BASE_URL + 'skills-assets/jquery.png',
        companyUrl: 'https://jquery.com/',
    },
    lightroom: {
        label: 'Lightroom',
        value: 'lightroom',
        iconUrl: BASE_URL + 'skills-assets/lightroom.png',
        companyUrl: 'https://www.adobe.com/products/photoshop-lightroom.html',
    },
    r: {
        label: 'R',
        value: 'r',
        iconUrl: BASE_URL + 'skills-assets/r.svg',
        companyUrl: 'https://www.r-project.org/',
    },
    xaml: {
        label: 'XAML',
        value: 'xaml',
        iconUrl: BASE_URL + 'skills-assets/xaml.png',
        companyUrl: 'https://docs.microsoft.com/en-us/dotnet/desktop/wpf/xaml/',
    },
    nativescript: {
        label: 'NativeScript',
        value: 'nativescript',
        iconUrl: BASE_URL + 'skills-assets/nativescript.png',
        companyUrl: 'https://nativescript.org/',
    },
    aftereffects: {
        label: 'After Effects',
        value: 'aftereffects',
        iconUrl: BASE_URL + 'skills-assets/aftereffects.png',
        companyUrl: 'https://www.adobe.com/in/products/aftereffects.html',
    },
    haskell: {
        label: 'Haskell',
        value: 'haskell',
        iconUrl: BASE_URL + 'skills-assets/haskell.png',
        companyUrl: 'https://www.haskell.org/',
    },
    unity: {
        label: 'Unity',
        value: 'unity',
        iconUrl: BASE_URL + 'skills-assets/unity.png',
        companyUrl: 'https://unity.com/',
    },
    flask: {
        label: 'Flask',
        value: 'flask',
        iconUrl: BASE_URL + 'skills-assets/flask.png',
        companyUrl: 'https://flask.palletsprojects.com/',
    },
    deno: {
        label: 'Deno',
        value: 'deno',
        iconUrl: BASE_URL + 'skills-assets/deno.svg',
        companyUrl: 'https://deno.land/',
    },
    nestjs: {
        label: 'NestJS',
        value: 'nestjs',
        iconUrl: BASE_URL + 'skills-assets/nestjs.svg',
        companyUrl: 'https://nestjs.com/',
    },
    bem: {
        label: 'BEM',
        value: 'bem',
        iconUrl: BASE_URL + 'skills-assets/bem.svg',
        companyUrl: 'http://getbem.com/',
    },
    powershell: {
        label: 'PowerShell',
        value: 'powershell',
        iconUrl: BASE_URL + 'skills-assets/powershell.png',
        companyUrl: 'https://docs.microsoft.com/en-us/powershell/',
    },
    gitlab: {
        label: 'GitLab',
        value: 'gitlab',
        iconUrl: BASE_URL + 'skills-assets/gitlab.svg',
        companyUrl: 'https://about.gitlab.com/',
    },
    dotnetcore: {
        label: '.Net Core',
        value: 'dotnetcore',
        iconUrl: BASE_URL + 'skills-assets/dotnetcore.png',
        companyUrl: 'https://dotnet.microsoft.com/download',
    },
    prisma: {
        label: 'Prisma',
        value: 'prisma',
        iconUrl: BASE_URL + 'skills-assets/prisma.png',
        companyUrl: 'https://www.prisma.io/',
    },
};

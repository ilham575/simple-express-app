pipeline {
    agent any
    tools {
        nodejs "node20"
    }

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/ilham575/simple-express-app.git'
                sh "npm install"
            }
        }

        stage('Scan') {
            steps {
                withSonarQubeEnv(installationName: 'SonarqubeScan') {
                    sh "npm install sonar-scanner"
                    sh 'npx sonar-scanner -X -X -Dsonar.projectKey=mywebapp'
                }
            }
        }
    }
}

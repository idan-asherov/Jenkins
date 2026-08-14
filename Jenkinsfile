pipeline {
   agent any
   stages {
      stage('Checkout') {
        steps {
           echo "מושכים את הקוד מהמאגר"
           checkout scm
        }
      }
      stage('Install') {
        steps {
           echo "מתקינים תלויות"
           sh "npm ci"
        }
      }
      stage('Test') {
        steps {
           echo "מריצים בדיקות"
           sh "npm test"
        }
      }
      stage('Build image') {
        steps {
           echo "בונים Docker Image"
           sh "docker build -t jenkins:${BUILD_NUMBER} -t jenkins:latest ."
        }
      }
      stage('Deploy') {
        steps {
           echo "מריצים את הגרסה החדשה על פורט 8001"
           sh "docker stop greets-live || true"
           sh "docker rm greets-live || true"
           sh "docker run -d --name greets-live -p 8001:8000 jenkins:latest"
        }
      }
   }
   post {
      success {
         echo "ה-pipeline סיים בהצלחה"
      }
      failure {
         echo "ה-pipeline נכשל"
      }
   }
}

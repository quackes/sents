pipeline{
  agent { label 'nodejs' }
  stages{
    stage ('checkout'){
      steps{
        cleanWs()
        checkout scm
      }
    }
    stage ('install modules'){
      steps{
        sh '''
          npm run update
        '''
      }
    }
    stage ('build') {
      steps{
          sh 'npm run build'
          stash includes: 'dist/**', name: 'webapp'
      }
    }
    stage ('deploy') {
      agent { label 'master'}
      steps{
          unstash 'webapp'
          script {
              openshift.withCluster() {
                openshift.withProject() {
                    echo "Using project: ${openshift.project()}"
                    openshift.selector("bc", "web").startBuild("--from-dir=./dist", "--follow");
              }
            }
          }
      }
    }
  }
}

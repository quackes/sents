pipeline{
  agent { label 'nodejs' }
  stages{
    stage ('checkout'){
      steps{
        checkout scm
      }
    }
    stage ('install modules'){
      steps{
        sh '''
          # npm install
        '''
      }
    }
    stage ('build') {
      steps{
        #   sh 'npm run build'
        sh 'mkdir dist && cp index.html dist/'
          stash includes: 'dist/apps/web/**', name: 'webapp'
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
                    openshift.selector("bc", "web").startBuild("--from-dir=./dist/apps/web", "--follow");
              }
            }
          }
      }
    }
  }
}

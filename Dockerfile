FROM       jackhu/jenkins-deploy-nodejs:8
MAINTAINER Jack Hu <hello@jackhu.top>

EXPOSE  8400

CMD ["npm","run","pm2-start"]
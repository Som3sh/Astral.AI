# build admin
npm run build

# Rsync the .next directory from local to remote server
rsync -avz -e "ssh -i ~/lightsail/LightsailDefaultKey.pem" /home/proud/Github/shaman-ent-website/admin/.next bitnami@13.235.191.107:/home/bitnami/admin
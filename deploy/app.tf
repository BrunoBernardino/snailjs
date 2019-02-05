resource "digitalocean_droplet" "snailjs-app" {
  image = "ubuntu-18-04-x64"
  name = "snailjs-app"
  region = "lon1"
  size = "s-1vcpu-1gb"
  private_networking = true
  ssh_keys = [
    "${var.ssh_fingerprint}"
  ]

  connection {
    user = "root"
    type = "ssh"
    private_key = "${file(var.pvt_key)}"
    timeout = "2m"
  }

  provisioner "remote-exec" {
    inline = [
      "export PATH=$PATH:/usr/bin",
      "apt-get -y update",
      "curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh",
      "bash nodesource_setup.sh",
      "npm install -g forever",
      "curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.13.0",
      "export PATH=$HOME/.yarn/bin:$PATH",
      "apt-get -y install gcc g++ make build-essential software-properties-common zlib1g-dev libssl-dev nodejs nginx logrotate",
      "add-apt-repository -y ppa:certbot/certbot",
      "apt-get -y update",
      "apt-get -y install certbot python-certbot-nginx",
      "apt -y autoremove",
      "mkdir -p /app"
    ]
  }

  provisioner "file" {
    source = "../build/"
    destination = "/app"
  }

  provisioner "file" {
    source = "logrotate.txt"
    destination = "/root/logrotate.txt"
  }

  provisioner "file" {
    source = "../package.json"
    destination = "/app/package.json"
  }

  provisioner "file" {
    source = "../.env"
    destination = "/app/.env"
  }

  provisioner "file" {
    source = "../.env.production"
    destination = "/app/.env.production"
  }

  provisioner "file" {
    source = "start.sh"
    destination = "/app/start.sh"
  }

  provisioner "file" {
    source = "stop.sh"
    destination = "/app/stop.sh"
  }

  provisioner "file" {
    source = "restart.sh"
    destination = "/app/restart.sh"
  }

  provisioner "file" {
    source = "install.sh"
    destination = "/app/install.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "cat /root/logrotate.txt > /etc/logrotate.conf",
      "chmod +x /app/start.sh",
      "chmod +x /app/stop.sh",
      "chmod +x /app/restart.sh",
      "chmod +x /app/install.sh",
      "/app/install.sh"
    ]
  }
}

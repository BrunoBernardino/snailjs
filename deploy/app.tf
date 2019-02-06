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
    script = "server-preinstall.sh"
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
    script = "server-postinstall.sh"
  }
}

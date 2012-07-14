7bits
=====


# устанавливаем гем
gem install jekyll

#генерация статики
$ jekyll

#заливка на сервер
$ rsync -av ./_site/* root@7bits.it:/var/www/7bits2/
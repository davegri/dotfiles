" vundle stuff
set nocompatible              " be iMproved, required
filetype off                  " required
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'tpope/vim-surround'
Plugin 'scrooloose/nerdtree'
Plugin 'ctrlpvim/ctrlp.vim' 
Plugin 'jelera/vim-javascript-syntax'
Plugin 'nathanaelkane/vim-indent-guides'
Plugin 'pangloss/vim-javascript'
Plugin 'raimondi/delimitMate'
call vundle#end()

" in osx make clipboard work with system clipboard
set clipboard=unnamed

" map leader
let mapleader=" "

" pressing shift is hard work
:nmap ; :

" pressing escape is insane 
:inoremap jk <esc>

" change movement to respect wrapping
:noremap j gj
:noremap k gk

" tab
set tabstop=4
set softtabstop=4
set expandtab

" indentation
set autoindent
filetype plugin indent on
set backspace=indent,eol,start

" visuals
syntax enable
colorscheme molokai
set background=dark
set number
set colorcolumn=80

" Search
set showmatch
set incsearch
set hlsearch

" NERDTree toggle
nnoremap <Leader>t :NERDTreeToggle<Cr>

" Shortcuts for adding lines without leaving norma mode
map <Enter> o<ESC>
map <S-Enter> O<ESC>

" filetype specific tab options
autocmd Filetype html setlocal ts=2 sts=2 expandtab
autocmd Filetype javascript  setlocal ts=2 sts=2 expandtab
autocmd Filetype python setlocal ts=4 sw=4 sts=0 expandtab

map <up> <nop>
map <down> <nop>
map <left> <nop>
map <right> <nop>
imap <up> <nop>
imap <down> <nop>
imap <left> <nop>
imap <right> <nop>

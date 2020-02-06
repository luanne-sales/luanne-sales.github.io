const createButton = (elem, page, link, url, active=false) => {
  let li = document.createElement('li')
  li.className = active ? 'page-item active' : 'page-item'
  page = (page > 1) ? '/blog/page'+  page : '/blog'
  li.insertAdjacentHTML('beforeend',
  '<a class="page-link" href="' + url + page + '" "tabindex="-1">'+ link + '</a>')
  elem.appendChild(li)
}

const buttonInfo = page => {
  return{
  first: '<i class="fas fa-angle-double-left"></i><span class="sr-only">First</span>',
  previous: '<i class="fas fa-angle-left"></i><span class="sr-only">Previous</span>',
  number: '<span><strong>' + page + '</strong></span>',
  next: '<i class="fas fa-angle-right"></i><span class="sr-only">Next</span>',
  last: '<i class="fas fa-angle-double-right"></i><span class="sr-only">Last</span>'
  }
}

const paginate = (page, maxPage, url) => {
  let elem = document.getElementById('paginator')

  elem.innerHTML = ''

  // First Page
  createButton(elem, 1, buttonInfo(page).first, url)

  // Previous Page 
  page > 1 && createButton(elem, page -1 , buttonInfo(page).previous, url)

  // Numbered buttons

  page > 2 && createButton(elem, page -2, buttonInfo(page -2).number, url)

  page > 1 && createButton(elem, page -1, buttonInfo(page -1).number, url)

  createButton(elem, page, buttonInfo(page).number, url, true)

  page < maxPage && createButton(elem, page +1, buttonInfo(page +1).number, url)

  page < maxPage -1 && createButton(elem, page +2, buttonInfo(page +2).number, url)

  // Next Page
  page < maxPage && createButton(elem, page +1, buttonInfo(page +1).next, url)

  // Last Page
  createButton(elem, maxPage, buttonInfo(maxPage).last, url)

}


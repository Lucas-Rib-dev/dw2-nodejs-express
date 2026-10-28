(() => {
  const money = value => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(value || 0));
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem('ampli-cart') || '[]').filter(i => i && i.id && i.name && Number.isFinite(Number(i.price)) && i.qty > 0); } catch { cart = []; }
  const panel=document.getElementById('cart-panel'), overlay=document.getElementById('cart-overlay');
  const save=()=>{localStorage.setItem('ampli-cart',JSON.stringify(cart));renderCart();};
  const openCart=()=>{panel?.classList.add('open');overlay?.classList.add('open');panel?.setAttribute('aria-hidden','false');};
  const closeCart=()=>{panel?.classList.remove('open');overlay?.classList.remove('open');panel?.setAttribute('aria-hidden','true');};
  document.getElementById('cart-toggle')?.addEventListener('click',openCart);document.getElementById('cart-close')?.addEventListener('click',closeCart);overlay?.addEventListener('click',closeCart);
  document.getElementById('menu-toggle')?.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open'));
  function renderCart(){
    const count=cart.reduce((n,i)=>n+i.qty,0);const countEl=document.getElementById('cart-count');if(countEl)countEl.textContent=count;
    const host=document.getElementById('cart-items');if(!host)return;
    if(!cart.length){host.innerHTML='<p class="cart-empty">Sua sacola está vazia por enquanto.</p>';}
    else {host.innerHTML=cart.map(item=>`<div class="cart-row"><div><h3>${escapeHtml(item.name)}</h3><p>${money(item.price)} cada</p><div class="cart-row-actions"><button data-cart-action="minus" data-id="${escapeHtml(item.id)}">−</button><span>${item.qty}</span><button data-cart-action="plus" data-id="${escapeHtml(item.id)}">+</button><button data-cart-action="remove" data-id="${escapeHtml(item.id)}">Remover</button></div></div><span class="cart-row-price">${money(item.price*item.qty)}</span></div>`).join('');}
    const total=cart.reduce((sum,item)=>sum+Number(item.price)*item.qty,0);const totalEl=document.getElementById('cart-total');if(totalEl)totalEl.textContent=money(total);
  }
  function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function toast(message){let el=document.querySelector('.toast');if(!el){el=document.createElement('div');el.className='toast';document.body.appendChild(el)}el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
  document.querySelectorAll('.add-cart').forEach(button=>button.addEventListener('click',()=>{
    const id=button.dataset.id;const name=button.dataset.name;const price=Number(button.dataset.price);const image=button.dataset.image || '';
    if(!id || !name || !Number.isFinite(price)){toast('Não foi possível adicionar este produto.');return;}
    const found=cart.find(item=>String(item.id)===String(id));if(found)found.qty++;else cart.push({id:String(id),name,price,image,qty:1});
    save();toast('Adicionado à sacola: '+name);if(button.classList.contains('detail-add'))openCart();
  }));
  document.getElementById('cart-items')?.addEventListener('click',event=>{const button=event.target.closest('[data-cart-action]');if(!button)return;const item=cart.find(i=>String(i.id)===String(button.dataset.id));if(!item)return;const action=button.dataset.cartAction;if(action==='plus')item.qty++;if(action==='minus')item.qty--;if(action==='remove'||item.qty<=0)cart=cart.filter(i=>String(i.id)!==String(button.dataset.id));save();});
  document.getElementById('checkout-button')?.addEventListener('click',()=>{if(!cart.length){toast('Adicione um produto antes de continuar.');return;}toast('Demonstração acadêmica: pagamento não habilitado.');});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeCart()});renderCart();
})();

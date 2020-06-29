// 右键菜单
import {EventService} from './EventService';

class RightMenuService{
  constructor(){
    this.event = new EventService();
  }

  prevent(el){
    el.addEventListener('contextmenu', function(e){
      e.preventDefault();
    })
  }

  show(x, y, context) {
    this.event.fire('contextmenu', {x, y, context});
  }

  onShow(listener){
    this.event.on('contextmenu', listener);
  }
}

export default new RightMenuService();
export interface IImg  {
    id:number
    desc:string
    title:string
    image:string
}

export interface Iimages{
    images:IImg[]
    upd:boolean
}

// id = models.AutoField(primary_key=True)
// desc = models.CharField(max_length=50,null=True,blank=True)
// title = models.CharField(max_length=50,null=True,blank=True)
// image=models.ImageField(null=True,blank=True,default='/holder.jpeg')
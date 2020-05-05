class Song:
    def __init__(self, musicName, artistName):
        self.musicName = musicName
        self.artistName = artistName

    def getMusicName(self):
        return self.musicName
    def getArtistName(self):
        return self.artistName

    def setMusicName(self, musicName):
        self.musicName = musicName
    def setArtistName(self, artistName):
        self.artistName = artistName

class Node:
    def __init__(self, value, nextNode = None):
        self.value = value
        self.nextNode = nextNode
    
    def getValue(self):
        return self.value
    def getNextNode(self):
        return self.nextNode

    def setValue(self, value):
        self.value = value
    def setNextNode(self, nextNode):
        self.nextNode = nextNode

class LinkedList:
    def __init__(self, head = None):
        self.head = head

    def getHead(self):
        return self.head
    
    def setHead(self, newHead):
        self.head = newHead

    def AddMusicToFront(self, newData):
        newNode = Node(newData, None)
        if self.getHead() == None:
            self.setHead(newNode)
        else:
            pointer = self.getHead()
            while pointer.getNextNode() is not None:
                pointer = pointer.getNextNode()
            pointer.setNextNode(newNode)

    def AddMusicAtPosition(self, newData, position):
        newNode = Node(newData, None)
        if position == 0:
            newNode.setNextNode(self.getHead())
            self.setHead(newNode)
        else:
            pointerPosition = 1
            pointer = self.getHead()
            while pointer.getNextNode() is not None:
                if pointerPosition == position:
                    tempNode = pointer.getNextNode()
                    pointer.setNextNode(newNode)
                    newNode.setNextNode(tempNode)
                pointer = pointer.getNextNode()
                pointerPosition += 1
    
    def RemoveMusicAtPosition(self, position):
        pointer = self.getHead()
        if position == 0:
            self.setHead(pointer.getNextNode())
        else:
            pointerPosition = 0
            while pointer.getNextNode() is not None:
                if pointerPosition == position - 1:
                    leftNode = pointer
                if pointerPosition == position:
                    rightNode = pointer.getNextNode()
                    leftNode.setNextNode(rightNode)
                pointer = pointer.getNextNode()
                pointerPosition += 1

    def DisplayAll(self):
        pointer = self.getHead()
        while pointer is not None:
            print(pointer.getValue().getMusicName())
            pointer = pointer.getNextNode()

    def SortByArtistName(self):
        position = 0
        pointer = self.getHead()
        while pointer.getNextNode() is not None:
            if pointer.getValue().getArtistName() < pointer.getNextNode().getValue().getArtistName():
                tempNode = pointer.getNextNode().getNextNode()
                if position == 0:
                    self.setHead(pointer.getNextNode())
                pointer.getNextNode().setNextNode(pointer)
                pointer.setNextNode(tempNode)
                pointer = pointer.getNextNode()
                position += 1
            else:
                pointer = pointer.getNextNode()
                position += 1

        pointer = self.getHead()
        while pointer is not None:
            print(pointer.getValue().getArtistName())
            pointer = pointer.getNextNode()

musicCollection = LinkedList()
song1 = Song("SongName1", "ArtistName1")
musicCollection.AddMusicToFront(song1)
song2 = Song("SongName2", "ArtistName2")
musicCollection.AddMusicToFront(song2)
song3 = Song("SongName3", "ArtistName3")
musicCollection.AddMusicToFront(song3)
song4 = Song("SongName4", "ArtistName4")
musicCollection.AddMusicAtPosition(song4, 0)
song5 = Song("SongName5", "ArtistName5")
musicCollection.AddMusicAtPosition(song5, 1)
musicCollection.RemoveMusicAtPosition(1)
musicCollection.DisplayAll()
